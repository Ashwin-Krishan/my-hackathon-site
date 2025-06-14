import './globals.css';

export const metadata = {
  title: 'ADK Media',
  description: 'Splash screen for ADK Media',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
