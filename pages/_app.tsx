import "../styles/globals.css";
import type { AppProps } from "next/app";
import ModeSwitch from "@/components/ModeSwitch";
import WithNavbar from "@/components/Layouts/WithNavbar";
import Script from "next/script";
import { env } from "env";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${env.GOOGLE_ANALYTICS_MESUREMENT_ID}`}
      /> */}
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${env.GOOGLE_ANALYTICS_MESUREMENT_ID}', {
              page_path: window.location.pathname,
            });
                `}
      </Script>
      <WithNavbar>
        <Component {...pageProps} />
        <ModeSwitch />
      </WithNavbar>
    </>
  );
}

export default MyApp;
