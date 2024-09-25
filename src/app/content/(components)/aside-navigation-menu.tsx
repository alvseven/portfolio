import Link from "next/link";

import { ExternalRedirectIcon } from "@/app/shared/components/icons/external-redirect";

type NavigationItem = {
  href: string;
  title: string;
  withExternalRedirect?: boolean;
};

type AsideNavigationMenuProps = {
  navigationItems: NavigationItem[];
};

export const AsideNavigationMenu = ({
  navigationItems,
}: AsideNavigationMenuProps) => {
  return (
    <aside className="md:block hidden mt-8 lg:ml-4 px-4 py-2 min-w-fit lg:min-w-[21rem] font-sans text-xl">
      <div className="md:block top-24 sticky border-slate-600 hidden pr-8 border-l border-l-double">
        <ul className="flex flex-col gap-6 py-4 w-full">
          {navigationItems.map((item, index) => (
            <li
              className="flex items-center hover:border-slate-400 pl-4 hover:border-l"
              key={index}
            >
              <Link
                className="font-medium text-sm underline underline-offset-4 group"
                href={item.href}
                target={item.withExternalRedirect ? "_blank" : "_self"}
              >
                <span className="group-hover:text-title block lg:text-lg transform transition-transform group-hover:translate-x-[3px] ease-in-out">
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
