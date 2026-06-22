import "./globals.css";
import "@/styles/Common.css";

export const metadata = {
  title: "Ray Palooza | Events and Marketing",
  description:
    "RayPalooza is a full-service event curation and brand marketing company dedicated to turning ideas into unforgettable experiences — luxury weddings, corporate events, and music & parties.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Poppins:wght@300;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Orbitron:wght@700;900&display=swap"
        />
        {children}
      </body>
    </html>
  );
}
