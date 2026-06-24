import "./globals.css";
import "@/styles/Common.css";
import Particles from "@/components/Particles";

const SITE_URL = "https://raypalooza.com";
const SITE_NAME = "Ray Palooza";
const SITE_DESCRIPTION =
  "RayPalooza is a full-service event curation and brand marketing company dedicated to turning ideas into unforgettable experiences — luxury weddings, corporate events, and music & parties.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Events and Marketing`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${SITE_NAME} | Events and Marketing`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/logo.png", width: 505, height: 242, alt: SITE_NAME }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Events and Marketing`,
    description: SITE_DESCRIPTION,
    images: ["/logo.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  email: "raypaloozaeventsmarketing@gmail.com",
  telephone: "+91-80920-90090",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Orbitron:wght@400;700;900&family=Poppins:wght@300;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Particles />
        {children}
      </body>
    </html>
  );
}
