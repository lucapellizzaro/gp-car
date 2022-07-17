import { useRouter } from "next/router";
import { pagelist } from "../../lib/arrayList";
import Link from "next/link";

export default function DesktopNavBar() {
  const router = useRouter();

  return (
    <nav>
      <ul className="flex space-x-10">
        {pagelist.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a
                className={
                  router.pathname === item.url
                    ? "text-secondary px-3 py-2"
                    : "hover:text-secondary px-3 py-2"
                }
              >
                {item.label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
