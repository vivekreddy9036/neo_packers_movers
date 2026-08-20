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
  phone: "+91 91211 04237",
  phone2: "+91 93469 27080",
  whatsapp: "919121104237",
  email: "neo_packermovers@yahoo.co.in",
  established: 2000,
  address:
    "Survey No 1/1, Behind TSIID Office, Airport Road, Ravirala Village, Shamshabad, Hyderabad – 501501",
  branches: ["Hyderabad (Head Office)", "Bengaluru", "Gandhidham"],
  contacts: {
    sales: { name: "Jaya Chandra Reddy", phone: "91211 04237", phone2: "93469 27080" },
    operations: { name: "Yugender", phone: "91211 04236", phone2: "99080 30303" },
    ground: { name: "Naresh", phone: "91211 04235" },
    director: { name: "Mr. Shekhar Reddy Kadire", phone: "99896 59116" },
  },
};
