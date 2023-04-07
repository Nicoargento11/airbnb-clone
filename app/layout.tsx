import { Nunito } from "next/font/google";
import "./globals.css";
import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";
import Modal from "./components/modals/Modal";

export const metadata = {
  title: "AirBnb-clone",
  description: "AirBnb clone",
};

const font = Nunito({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <Modal isOpen tittle={`What's up`} />
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}
