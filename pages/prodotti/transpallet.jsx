import Container from "../../components/container";
import { NextSeo } from "next-seo";
import Title from "../../components/title";
import ProductCard from "../../components/productCard";
import Link from "next/link";
import { productslist } from "../../lib/arrayList";
import Article from "../../components/article";

export const getStaticProps = async () => {
  return {
    props: {
      products: productslist,
    },
  };
};

export default function Transpallet({ products }) {
  return (
    <main>
      <NextSeo
        title="Transpallet in vendita"
        description="Scopri le nostre proposte di transpallet, sia nuovo, che rigenerato garantito o usato."
      />

      <Title
        titleH1="Transpallet"
        subtitleH2="Scopri le nostre proposte di transpallet, sia nuovo, che rigenerato garantito o usato."
      />

      <section className="">
        <Container>
          <Article>
            <h3>Peccato, al momento non abbiamo questo tipo di prodotti :/</h3>
            <p>
              Puoi richiederci gratuitamente di cercare altri prodotti nel
              mercato dei carrelli elevatori e transpallet, sia nuovi che usati.
              Scrivici specificando tipologia, condizione e marchio preferito.
              Ti risponderemo il prima possibile.
            </p>
            <Link href="/contatti">
              <a title="Richiedi ricerca prodotto">Richiedi ricerca prodotto</a>
            </Link>
            <p>
              Ma abbiamo altre proposte, di seguito puoi vedere le disponibilità
              attuali.
            </p>
            <hr />
            <p></p>
          </Article>
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
