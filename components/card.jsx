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
            src={imgUrl}
            alt={imgAlt}
            className="w-full h-full object-center rounded object-cover lg:w-full lg:h-full"
          ></Image>
          <figcaption className="opacity-0">{imgAlt}</figcaption>
        </figure>
        <h3>{cardTitle}</h3>
        <p>{cardText}</p>
        <Link href={cardUrl}>
          <a>{cardLink}</a>
        </Link>
      </Article>
    </div>
  );
}
