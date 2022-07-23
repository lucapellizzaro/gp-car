import SEO from "../next-seo.config";
import PlausibleProvider from "next-plausible";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import "../styles/font.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="gp-car.com">
      <Layout>
        <DefaultSeo
          titleTemplate="%s - GP-CAR - Vicenza"
          defaultTitle="Assistenza vendita carrelli elevatori, transpallet - GP-CAR - Vicenza"
          {...SEO}
        />
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}

export default MyApp;
