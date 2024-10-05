import "@/app/_styles/globals.css";
import { Josefin_Sans } from "next/font/google";
import Header from "./_components/Header";
import { ReservationProvider } from "./_components/ReservationContext";

const Josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

/* note-fonts : Next.js automatically self-host google fonts
so u dont have to download any google fonts */

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by mountains and dark forests",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body
        className={`${Josefin.className} min-h-screen bg-primary-950 text-primary-100 flex flex-col antialiased`}
      >
        <Header />

        <div className="grid flex-1 px-8 py-12">
          <main className="w-full mx-auto max-w-7xl">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
