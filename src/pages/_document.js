import Document, { Html, Head, Main, NextScript } from "next/document";
import { SSRProvider } from "@react-aria/ssr";
class MyDocument extends Document {
  render() {
    return (
      <SSRProvider>
        <Html lang="en">
          <Head>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-17HMTS7RL7"></script>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-17HMTS7RL7');
              `,
              }}>
                
              </script>
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      </SSRProvider>
    );
  }
}

export default MyDocument;
