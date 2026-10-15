import "../src/index.css";
import "../src/App.css";
import StyledComponentsRegistry from "./styled-components-registry";

export const metadata = {
  title: "Portfolio Arif | Junior Developer",
  description:
    "Portfolio Arif, junior developer dari Sukabumi yang berfokus pada pengembangan web dan desain antarmuka.",
  icons: {
    icon: "logo.svg",
    apple: "logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
