import '../styles/global.css';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Meridian - Weather Almanac',
  description: 'Current conditions and forecasts for cities around the world.',
  icons: { icon: '/favicon.svg' },
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();
  const theme = cookieStore.get('meridian-theme')?.value === 'dark' ? 'dark' : 'light';

  return (
    <html lang="en" data-theme={theme}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,480;9..144,560&family=Sora:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}