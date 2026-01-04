import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const KEYFILEPATH = path.join(__dirname, '../keys.json');

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

const auth = new google.auth.GoogleAuth({
  keyFile: KEYFILEPATH,
  scopes: SCOPES,
});

const calendar = google.calendar({ version: 'v3', auth });

// --- CONFIGURACIÓN DE NODEMAILER ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // Recomiendo usar variables de entorno
    pass: process.env.EMAIL_PASS  // Tu "Contraseña de aplicación" de Google
  }
});

app.post('/api/citas', async (req, res) => {
  try {
    const { nombre, email, fecha, servicio } = req.body;

    if (!nombre || !email || !fecha) {
      return res.status(400).json({ error: 'Faltan datos requeridos' });
    }

    // --- LÓGICA DE FECHA Y HORA ---
    // Ajustamos la hora de finalización (1 hora después) de forma segura
    const startDate = new Date(fecha);
    const endDate = new Date(startDate.getTime() + (60 * 60 * 1000));

    // Formateo para Google Calendar con zona horaria Colombia (-05:00)
    const formatGoogleDate = (date: Date) => {
      return date.toISOString().replace(/\.\d{3}Z$/, '-05:00');
    };

    const event = {
      summary: `Cita: ${nombre} - ${servicio}`,
      description: `Paciente: ${nombre}\nServicio: ${servicio}\nEmail: ${email}`,
      start: {
        dateTime: formatGoogleDate(startDate),
        timeZone: 'America/Bogota',
      },
      end: {
        dateTime: formatGoogleDate(endDate),
        timeZone: 'America/Bogota',
      },
      reminders: {
        useDefault: true,
      },
    };

    // 1. Insertar en Google Calendar
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID as string,
      requestBody: event,
    });

    // 2. Enviar correo de confirmación (Independiente de Google Calendar)
const mailOptions = {
      from: `"Sistema de Citas Fisiovital" <${process.env.EMAIL_USER}>`,
      to: email, // Correo del paciente
      bcc: process.env.EMAIL_USER, // Te envía una copia oculta a ti automáticamente
      subject: '✅ Confirmación de tu Cita - Fisiovital',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 15px;">
          <h1 style="color: #1a4b63; text-align: center;">¡Hola ${nombre}!</h1>
          <p style="font-size: 16px; color: #555;">Tu cita ha sido agendada con éxito en <strong>Fisiovital</strong>.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 10px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>🩺 Servicio:</strong> ${servicio}</p>
            <p style="margin: 5px 0;"><strong>📅 Fecha y Hora:</strong> ${startDate.toLocaleString('es-CO', { timeZone: 'America/Bogota', dateStyle: 'full', timeStyle: 'short' })}</p>
            <p style="margin: 5px 0;"><strong>📍 Ubicación:</strong> Consultorio Fisiovital</p>
          </div>

          <p style="color: #777; font-size: 14px;">Hemos reservado este espacio especialmente para ti. Si por algún motivo no puedes asistir, por favor avísanos con al menos 24 horas de anticipación.</p>
          
          <div style="text-align: center; margin-top: 30px;">
            <a href="${response.data.htmlLink}" style="background-color: #1a4b63; color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; font-weight: bold;">Ver en mi Calendario</a>
          </div>
          
          <p style="text-align: center; color: #aaa; font-size: 12px; margin-top: 40px;">Este es un mensaje automático, por favor no respondas a este correo.</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: 'Cita creada y correo enviado',
      link: response.data.htmlLink,
    });

  } catch (error: any) {
    console.error('Error en el proceso:', error.response?.data || error.message);
    res.status(500).json({ 
      error: 'Error en el servidor',
      details: error.message 
    });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});