import Document, { Html, Head, Main, NextScript } from "next/document";
import { env } from "env";
import { schemaData } from "schemaData";
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
            href="https://fonts.googleapis.com/css2?family=IM+Fell+Double+Pica&display=swap "
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link rel="icon" href="/favicon.ico" />
          <meta charSet="utf-8" />

          <meta
            property="og:title"
            content="Brisa Díaz | Frontend Development Specialist 👩‍💻"
          />
          <meta property="og:type" content="article" />
          <meta
            property="og:image"
            content="/brisa-diaz--frontend-developer-porfolio-logo.jpg"
          />
          <meta property="og:url" content={env.NEXT_PUBLIC_SITE_URL} />
          <meta property="og:site_name" content={env.NEXT_PUBLIC_SITE_NAME} />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta
            property="og:description"
            content="I'm enthusiastic frontend developer, passionate about learning innovative technologies and digital-product development."
          />
          <meta
            name="twitter:card"
            content="I'm enthusiastic frontend developer, passionate about learning innovative technologies and digital-product development."
          />
          <meta
            property="twitter:title"
            content="Brisa Díaz | Frontend Development Specialist 👩‍💻"
          />
          <meta
            property="twitter:image"
            content="/brisa-diaz-frontend-developer-portfolio-logo.jpg"
          />
          <meta property="witter:site" content={env.NEXT_PUBLIC_SITE_URL} />
          <meta name="twitter:creator" content="Brisa Díaz" />
          <meta name="author" content="Brisa Díaz" />
          <meta name="twitter:image:alt" content="portfolio logo" />

          <meta
            name="description"
            content="I'm enthusiastic frontend developer, passionate about learning innovative technologies digital-product development."
          />
          <meta
            name="keywords"
            content="brisa diaz,web developer,frontend developer,fullstack developer,front end developer,front-end developer,frontend engineer,full stack developer,full-stack developer,app,application,experience,knowledge,work,working,project,projects,team,skills,SEO,web apps,web applications,specialist,web development,software,brisa diaz portfolio,portfolio,frontend developer portfolio,javascript,typescript,react,next.js,node.js,graphql"
            key="titleKeywords"
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `</script><link rel='preload' href='style.css' as='style' onload="this.onload=null;this.rel='stylesheet'"/><script>`,
            }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schemaData),
            }}
          />
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
