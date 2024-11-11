import type { Metadata } from "next";
import '@mui/material-pigment-css/styles.css';

export const metadata: Metadata = {
  title: "MUI Pigment project example",
  description: "MUI Pigment project example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
