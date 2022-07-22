import Article from "./article";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  imgUrl,
  imgAlt,
  cardIndex,
  cardTitle,
  cardStato,
  cardText,
  cardUrl,
  cardType,
  cardCategoria,
  cardLink,
}) {
  return (
    <div key={cardIndex} className="mb-10 relative">
      <Article>
        <div className="z-20 uppercase font-semibold absolute top-1 right-1 bg-secondary rounded px-2 py-0.5 text-xs lg:text-sm">
          {cardStato}
        </div>
        <div className="relative aspect-w-3 aspect-h-2">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRqICAABXRUJQVlA4WAoAAAAgAAAAOAAAJQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBkAAAAcAQAnQEqOQAmAD7tYqlOP68sozAYDAPwHYlpAM8oFZr3UVs8m3WG7YzPqQAA/u+4fDye35Gy18Cq1BxNfhlw1Kw7vavf+aYdhKk1WRLCVzt8rztEyCp052+iGc+N0TzYLmgAAA=="
            src={imgUrl}
            alt={imgAlt}
            className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
          ></Image>
        </div>
        <h3>{cardTitle}</h3>
        <p className="line-clamp-3">{cardText}</p>
        <Link
          href={{
            pathname: "/prodotti/[slug]",
            query: { slug: cardUrl },
          }}
        >
          <a title={cardLink}>{cardLink}</a>
        </Link>
      </Article>
    </div>
  );
}
