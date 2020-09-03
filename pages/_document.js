import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    var props = await Document.getInitialProps(ctx)
    return { ...props }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/static/hackermon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="theme-color" content="#50c878" />
          <meta name="og:title" content="PDanielY" />
          <meta name="og:description" content="This is the blogs for PDanielY, a human being that loves coding. I have 0 blogs right now so this website has like no content." />
          <meta name="og:image" content="https://jdaniels.me/static/hackermon.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content="PDanielY" />
          <meta name="twitter:description" content="This is the blogs for PDanielY, a human being that loves coding. I have 0 blogs right now so this website has like no content." />
          <meta name="twitter:image" content="https://jdaniels.me/static/hackermon.png" />
          <meta name="twitter:site" content="@plop_daniel" />

          { /* Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id="
          />

          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '');
        `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument