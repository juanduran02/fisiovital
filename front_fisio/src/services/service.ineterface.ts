// src/interfaces/service.interface.ts
import { ReactNode } from 'react';

export interface Service {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}