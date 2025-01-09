import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";

export async function GET() {
  const directoryPath = path.join(process.cwd(), "public/clients");
  const files = fs.readdirSync(directoryPath);

  const client = files
    .filter((file) => /\.(png|jpe?g|svg|gif)$/.test(file))
    .map((file) => ({
      name: file.replace(/\.[^/.]+$/, ""), // Remove the file extension for the name
      logo: `/clients/${file}`, // URL for the logo
    }));

  return NextResponse.json(client);
}
