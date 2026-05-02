import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollTo(href: string) {
  const id = href.replace(/^#/, "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export const SITE = {
  name: "Neo Packers & Movers",
  phone: "+91 91211 04235",
  whatsapp: "919121104235",
  email: "info@neopackersandmovers.com",
  established: 1999,
  address:
    "Survey No 1/1, Behind TSIID Office, Airport Road, Ravirala Village, Shamshabad, Hyderabad – 501501",
};
