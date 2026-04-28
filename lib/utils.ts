import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Neo Industrial",
  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER ?? "+91 9999 999 999",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919999999999",
  email: "ops@neoindustrial.example",
  established: 2003,
};
