import Container from "../../components/container";
import { NextSeo } from "next-seo";
import Title from "../../components/title";
import ProductCard from "../../components/productCard";
import Link from "next/link";

export default function VetrinaProdotti({ products }) {
  return (
    <main>
      <NextSeo
        title="Contatti per un preventivo o informazioni"
        description="Scopri le nostre proposte di carrelli elevatori e transpallet, sia nuovo, rigenerato garantito o usato."
      />

      <Title
        titleH1="Vetrina prodotti"
        subtitleH2="Scopri le nostre proposte di carrelli elevatori e transpallet, sia nuovo, rigenerato garantito o usato."
      />

      <section className="">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products.map((item, index) => (
              <ProductCard
                cardIndex={index}
                cardTitle={item.title}
                cardText={item.desc}
                cardLink="Scopri tutto"
                cardUrl={item.slug}
                cardCategoria={item.categoria}
                cardType={item.type}
                cardStato={item.stato}
                imgAlt={item.imgAlt}
                imgUrl={item.imgSrc}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://gp-car.vercel.app/db");
  const products = await res.json();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products,
    },
  };
}
