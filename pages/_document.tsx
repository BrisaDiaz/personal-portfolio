import Document, { Html, Head, Main, NextScript } from "next/document";
import { env } from "env";

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en-us">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href="/apple-icon-57x57.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href="/apple-icon-60x60.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href="/apple-icon-72x72.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="/apple-icon-76x76.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href="/apple-icon-114x114.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href="/apple-icon-120x120.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href="/apple-icon-144x144.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/apple-icon-152x152.png"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-icon-180x180.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/android-icon-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon-96x96.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <meta property="og:title" content="Brisa Diaz - Frontend Developer" />
          <meta property="og:type" content="article" />
          <meta property="og:image" content="/org.png" />
          <meta property="og:url" content={env.NEXT_PUBLIC_SITE_URL} />
          <meta name="twitter:card" content="summary_large_image" />

          <meta
            property="og:description"
            content="I'm enthusiastic frontend developer, passionate about learning innovative and technologies digital-product development."
          />
          <meta property="og:site_name" content={env.NEXT_PUBLIC_SITE_NAME} />
          <meta name="twitter:image:alt" content="brisa diaz portfolio" />

          <link rel="manifest" href="/manifest.json" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700;900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <meta name="author" content="Brisa Díaz" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="I'm enthusiastic frontend developer, passionate about learning innovative and technologies digital-product development."
          />
          <meta
            name="keywords"
            content="web developer,frontend developer,front end developer,front-end developer,frontend engineer,full stack developer,fullstack developer,full-stack developer,brisa diaz,brisa diaz portfolio,portfolio,frontend developer portfolio,javascript,typescript,react,next.js,node.js,graphql"
            key="titleKeywords"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
