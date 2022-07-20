import Article from "./article";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  imgUrl,
  imgAlt,
  cardTitle,
  cardText,
  cardUrl,
  cardLink,
}) {
  return (
    <div className="mb-10">
      <Article>
        <figure className="aspect-w-16 aspect-h-9">
          <Image
            layout="fill"
            placeholder="blur"
            blurDataURL="data:image/webp;base64,UklGRqICAABXRUJQVlA4WAoAAAAgAAAAOAAAJQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBkAAAAcAQAnQEqOQAmAD7tYqlOP68sozAYDAPwHYlpAM8oFZr3UVs8m3WG7YzPqQAA/u+4fDye35Gy18Cq1BxNfhlw1Kw7vavf+aYdhKk1WRLCVzt8rztEyCp052+iGc+N0TzYLmgAAA=="
            src={imgUrl}
            alt={imgAlt}
            className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
          ></Image>
          <figcaption className="opacity-0">{imgAlt}</figcaption>
        </figure>
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
        <Link href={cardUrl}>
          <a title={cardLink}>{cardLink}</a>
        </Link>
      </Article>
    </div>
  );
}
