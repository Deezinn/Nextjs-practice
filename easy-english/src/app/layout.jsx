import "./globals.css";
import "./fonts.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="lato-regular">
        {children}
      </body>
    </html>
  );
}
