import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import fs from "fs";
import path from "path";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getClientLogos() {
  const directoryPath = path.join(process.cwd(), "public/clients");
  const files = fs.readdirSync(directoryPath);
  return files.filter((file) => /\.(png|jpe?g|svg|gif)$/.test(file));
}
