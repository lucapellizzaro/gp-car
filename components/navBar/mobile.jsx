import { useRouter } from "next/router";
import { pagelist } from "../../lib/arrayList";
import Link from "next/link";

import { Menu, Transition } from "@headlessui/react";

import { forwardRef } from "react";

const MyLink = forwardRef((props, ref) => {
  const router = useRouter();
  let { href, children, ...rest } = props;
  return (
    <Link href={href}>
      <a
        className={
          router.pathname === href
            ? "text-secondary px-12 py-3"
            : "hover:text-secondary px-12 py-3"
        }
        ref={ref}
        {...rest}
      >
        {children}
      </a>
    </Link>
  );
});

MyLink.displayName = "MyLink";

function MobileNavBar() {
  return (
    <Menu>
      <Menu.Button className="relative p-3 inline-flex focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
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

        <span className="sr-only">Apri menù</span>
      </Menu.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transition opacity-0"
        enterTo="transitionopacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transition opacity-100"
        leaveTo="transition opacity-0"
      >
        <Menu.Items className="fixed flex flex-col text-xl top-0 z-50 w-[85%] bg-primary bg-opacity-95 right-0 h-screen">
          <Menu.Button className="relative justify-end inline-flex focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary p-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span className="sr-only">Chiudi menù</span>
          </Menu.Button>
          {pagelist.map((item, index) => (
            <Menu.Item key={index}>
              <MyLink href={item.url}>{item.label}</MyLink>
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export default MobileNavBar;
