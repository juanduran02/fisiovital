# Usamos una imagen de Node ligera
FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Copiamos archivos de dependencias
COPY package*.json ./

# Instalamos dependencias
RUN npm install

# Copiamos el resto del código (incluyendo keys.json y src)
COPY . .

# Exponemos el puerto del backend
EXPOSE 4000

# Comando para iniciar
CMD ["npm", "run", "dev"]