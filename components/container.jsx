// export default function Container({ children }) {
//   return (
//     <div className="max-w-[1440px] mx-auto px-3 sm:px-6 md:px-12">
//       {children}
//     </div>
//   );
// }

import clx from "classnames";

export default function Container({ children, size = "big", className = "" }) {
  return (
    <div
      className={clx(
        "max-w-[1440px] m-auto px-4 sm:px-6 md:px-12",
        {
          "py-14 sm:py-20 md:py-24": size === "big",
          "py-4 sm:py-8 md:py-12": size === "little",
        },
        className
      )}
    >
      {children}
    </div>
  );
}
