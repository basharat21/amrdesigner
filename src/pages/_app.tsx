import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Inter, Roboto_Condensed, Poppins } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const inter = Inter({ variable: '--font-inter', subsets: ["latin"] });
const roboto_rondensed = Roboto_Condensed({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
