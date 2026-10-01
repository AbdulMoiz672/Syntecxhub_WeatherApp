import '../styles/global.css';
import { ThemeProvider } from '../components/ThemeContext';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || (process.env.GITHUB_PAGES === 'true' ? '/Syntecxhub_WeatherApp' : '');

export const metadata = {
  title: 'Vantage - Weather Almanac',
  description: 'Current conditions and forecasts for cities around the world.',
  icons: { icon: `${basePath}/favicon.svg` },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,480;9..144,560&family=Sora:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider theme="light">{children}</ThemeProvider>
      </body>
    </html>
  );
}