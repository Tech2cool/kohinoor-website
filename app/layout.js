import "./globals.css";

export const metadata = {
  title: "Kohinoor CHS",
  description: "Kohinoor CHS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
