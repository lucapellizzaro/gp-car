import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="it_IT">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-dark scroll-smooth bg-white font-sans text-base lg:text-lg xl:text-xl antialiased h-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
