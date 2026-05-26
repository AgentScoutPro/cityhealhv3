import './globals.css';
import { Geist } from "next/font/google";
import { cn } from "@/tokens/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata = {
  metadataBase: new URL('https://cityhealthaz.com'),
  title: {
    default: 'City Health AZ | Pain Management & Physical Medicine — Mesa, AZ',
    template: '%s | City Health AZ',
  },
  description:
    'Expert pain management, physical medicine, and rehabilitation in Mesa, AZ. Serving Chandler, Gilbert, Scottsdale, and the greater Phoenix metro area.',
  openGraph: {
    siteName: 'City Health AZ',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Space+Grotesk:wght@400;500;600;700&family=Noto+Sans:wght@300;400;500;700&family=Inter:wght@300;400;500;600&family=Space+Mono:wght@400;700&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
