import "../styles/globals.css";
import type { AppProps } from "next/app";
import ModeSwitch from "@/components/ModeSwitch";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <ModeSwitch />
    </>
  );
}

export default MyApp;
