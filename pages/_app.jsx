import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <DefaultSeo
        titleTemplate="%s - GP-CAR - Vicenza"
        defaultTitle="Assistenza vendita carrelli elevatori, transpallet - GP-CAR - Vicenza"
        {...SEO}
      />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
