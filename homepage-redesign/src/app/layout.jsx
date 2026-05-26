import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
