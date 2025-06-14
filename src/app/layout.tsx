import './globals.css';

export const metadata = {
  title: 'ADK Media',
  description: 'Splash screen',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
