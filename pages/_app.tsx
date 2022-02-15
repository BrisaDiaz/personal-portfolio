import "../styles/globals.css";
import type { AppProps } from "next/app";
import SocialShareButtons from "@/components/SocialShareButtons/index";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <SocialShareButtons />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
