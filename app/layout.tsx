import { Provider } from "./Provider";
import "./globals.css";

export const metadata = {
  title: "Your Menu",
  description: "Create you're menu really fast and simple",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
