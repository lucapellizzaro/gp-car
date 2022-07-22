import Article from "../../components/article";
import { NextSeo } from "next-seo";
import Title from "../../components/title";
import { productslist } from "../../lib/arrayList";
import Container from "../../components/container";

export async function getStaticProps({ params }) {
  const productlist = productslist.filter(
    (p) => p.slug.toString() === params.slug
  );
  return {
    props: {
      product: productlist[0],
    },
  };
}

export async function getStaticPaths() {
  const paths = productslist.map((product) => ({
    params: { slug: product.slug.toString() },
  }));
  return { paths, fallback: false };
}

function Prodotto({ product }) {
  return (
    <main>
      <NextSeo
        title="Assistenza, vendita carrelli elevatori, transpallet"
        description="GP-CAR garantisce interventi di riparazione e assistenza rapida, su carrelli elevatori elettrici e gasolio, transpallet manuali o elettrici."
      />

      <Title
        titleH1={product.title}
        subtitleH2="GP-CAR garantisce interventi di riparazione e assistenza rapida, su carrelli elevatori elettrici e gasolio, transpallet manuali o elettrici."
      />
      <Container>
        <Article>
          <h2>{product.title}</h2>
          <p>{product.desc}</p>
        </Article>
      </Container>
    </main>
  );
}

export default Prodotto;
