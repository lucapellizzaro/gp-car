import Article from "./article";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  imgSrc,
  imgAlt,
  cardLink,
  slug,
  stato,
  desc,
  title,
}) {
  return (
    <div className="mb-10 relative">
      <Article>
        <Link
          href={{
            pathname: "/prodotti/[slug]",
            query: { slug: slug },
          }}
        >
          <a>
            <div className="z-20 uppercase font-semibold absolute top-1 right-1 bg-secondary rounded px-2 py-0.5 text-xs lg:text-sm">
              {stato}
            </div>
            <div className="relative aspect-w-3 aspect-h-2">
              <Image
                layout="fill"
                placeholder="blur"
                blurDataURL="data:image/webp;base64,UklGRqICAABXRUJQVlA4WAoAAAAgAAAAOAAAJQAASUNDUBgCAAAAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANlZQOCBkAAAAcAQAnQEqOQAmAD7tYqlOP68sozAYDAPwHYlpAM8oFZr3UVs8m3WG7YzPqQAA/u+4fDye35Gy18Cq1BxNfhlw1Kw7vavf+aYdhKk1WRLCVzt8rztEyCp052+iGc+N0TzYLmgAAA=="
                src={imgSrc}
                alt={imgAlt}
                className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
              ></Image>
            </div>
          </a>
        </Link>
        <h3>{title}</h3>
        <p className="line-clamp-3">{desc}</p>
        <Link
          href={{
            pathname: "/prodotti/[slug]",
            query: { slug: slug },
          }}
        >
          <a title={cardLink}>{cardLink}</a>
        </Link>
      </Article>
    </div>
  );
}
