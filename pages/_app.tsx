import "../styles/globals.css";
import type { AppProps } from "next/app";
import ModeSwitch from "@/components/ModeSwitch";
import WithNavbar from "@/components/Layouts/WithNavbar";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <WithNavbar>
        <Component {...pageProps} />
        <ModeSwitch />
      </WithNavbar>
    </>
  );
}

export default MyApp;
