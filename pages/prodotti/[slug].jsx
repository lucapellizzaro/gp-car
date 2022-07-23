import Article from "../../components/article";
import { NextSeo } from "next-seo";
import Title from "../../components/title";
import { productslist } from "../../lib/arrayList";
import Container from "../../components/container";
import Image from "next/image";
import Link from "next/link";
import Productform from "../../components/productForm";

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
        title={product.categoria + " " + product.stato + " " + product.title}
        description={"In vendita " + product.desc}
      />

      <Title
        titleH1={product.title}
        subtitleH2={product.categoria + " " + product.stato}
      />
      <Container>
        <Article>
          <figure className="aspect-w-5 aspect-h-4">
            <Image
              layout="fill"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRqICAABXRUJQVlA4WAoAAAAgAAAAOAAAJQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBkAAAAcAQAnQEqOQAmAD7tYqlOP68sozAYDAPwHYlpAM8oFZr3UVs8m3WG7YzPqQAA/u+4fDye35Gy18Cq1BxNfhlw1Kw7vavf+aYdhKk1WRLCVzt8rztEyCp052+iGc+N0TzYLmgAAA=="
              src={product.imgSrc}
              alt={product.imgAlt}
              className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
            ></Image>
            <figcaption className="opacity-0">{product.imgAlt}</figcaption>
          </figure>

          <h3>
            <span className="text-gray-500">Tipologia: </span>{" "}
            {product.categoria}
          </h3>
          <h3>
            <span className="text-gray-500">Modello: </span> {product.title}
          </h3>
          <h3 className="capitalize">
            <span className="text-gray-500">Condizioni: </span>
            {product.stato}
          </h3>
          <p>{product.desc}</p>
          <h3>Sei interessanto a questo prodotto?</h3>
          <p>
            Compila questo breve modulo, ti risponderemo il prima possibile.
          </p>
          <Productform productName={product.title} />
        </Article>
      </Container>
      <Container>
        <Article>
          <h3>Non hai trovato quello che ti interessa?</h3>
          <p>
            Puoi richiederci gratuitamente di cercare altri prodotti nel mercato
            dei carrelli elevatori e transpallet, sia nuovi che usati. Scrivici
            specificando tipologia, condizione e marchio preferito. Ti
            risponderemo il prima possibile.
          </p>
          <Link href="/contatti">
            <a title="Richiedi ricerca prodotto">Richiedi ricerca prodotto</a>
          </Link>
        </Article>
      </Container>
    </main>
  );
}

export default Prodotto;
