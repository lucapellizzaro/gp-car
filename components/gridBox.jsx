import Article from "./article";

import Link from "next/link";

export default function Gridbox({ boxTitle, boxText, boxCta, boxLink }) {
  return (
    <div className="mb-10">
      <Article>
        <h3>{boxTitle}</h3>
        <p>{boxText}</p>
        <Link href={boxLink}>
          <a>{boxCta}</a>
        </Link>
      </Article>
    </div>
  );
}
