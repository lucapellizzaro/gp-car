import Article from "../../components/article";
import { NextSeo } from "next-seo";
import Title from "../../components/title";
import { productslist } from "../../lib/arrayList";
import Container from "../../components/container";

export async function getStaticPaths() {
  const res = await fetch(
    "https://my-json-server.typicode.com/lucapellizzaro/gp-car"
  );
  const products = await res.json();

  const paths = products.map((product) => {
    return {
      params: { slug: product.slug.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const res = await fetch(
    "https://my-json-server.typicode.com/lucapellizzaro/gp-car/" + slug
  );
  const data = await res.json();

  return {
    props: { product: data },
  };
}

function Prodotto({ product }) {
  console.log(product);
  return (
    <main>
      <NextSeo
        title="Assistenza, vendita carrelli elevatori, transpallet"
        description="GP-CAR garantisce interventi di riparazione e assistenza rapida, su carrelli elevatori elettrici e gasolio, transpallet manuali o elettrici."
      />

      <Title
        titleH1="prova"
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
