import Link from "next/link";

import { ExternalRedirectIcon } from "@/app/(shared)/components/icons/external-redirect";

type NavigationItem = {
  href: `#${string}` | `http://${string}` | `https://${string}`;
  title: string;
  withExternalRedirect?: true;
};

type AsideNavigationMenuProps = {
  navigationItems: NavigationItem[];
};

export const AsideNavigationMenu = ({
  navigationItems,
}: AsideNavigationMenuProps) => {
  return (
    <aside className="md:block hidden mt-8 lg:ml-4 px-4 py-2 min-w-fit lg:min-w-[21rem] font-sans">
      <div className="md:block top-24 sticky border-slate-700 hidden pr-8 border-l border-dashed ">
        <ul className="flex flex-col gap-4 py-4 w-full max-h-[80vh] overflow-y-auto pr-4 scrollbar">
          {navigationItems.map((item, index) => (
            <li
              className="flex items-center hover:border-slate-400 pl-4 hover:border-l"
              key={index}
            >
              <Link
                className="font-medium group"
                href={item.href}
                target={item.withExternalRedirect ? "_blank" : "_self"}
              >
                <span className="group-hover:text-title block text-sm transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  {item.title}
                  {item.withExternalRedirect && (
                    <ExternalRedirectIcon className="lg:inline hidden pl-2" />
                  )}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
