import Container from "../../components/container";
import { NextSeo } from "next-seo";
import Title from "../../components/title";
import ProductCard from "../../components/productCard";
import Link from "next/link";
import { productslist } from "../../lib/arrayList";

export const getStaticProps = async () => {
  return {
    props: {
      products: productslist,
    },
  };
};

export default function Usato({ products }) {
  return (
    <main>
      <NextSeo
        title="Carrelli elevatori, transpallet usati"
        description="Scopri le nostre proposte di carrelli elevatori e transpallet, rigenerato garantito o usato."
      />

      <Title
        titleH1="Carrelli elevatori e transpallet usati"
        subtitleH2="Scopri le nostre proposte di carrelli elevatori e transpallet usati garantiti."
      />

      <section className="">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {products
              .filter((product) => product.stato === "usato")
              .map((filteredProduct) => (
                <ProductCard
                  key={filteredProduct.id}
                  cardLink="Vedi prodotto"
                  {...filteredProduct}
                />
              ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
