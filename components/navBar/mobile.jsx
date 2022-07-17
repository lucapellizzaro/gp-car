import { useRouter } from "next/router";
import { pagelist } from "../../lib/arrayList";
import Link from "next/link";

export default function MobileNavBar() {
  const router = useRouter();

  return (
    <nav>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h7"
        />
      </svg>
    </nav>
  );
}
