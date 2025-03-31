import Link from "next/link";
import { ExternalRedirectIcon } from "@/app/(shared)/components/icons/external-redirect";

type NavigationItem = {
  href: string;
  title: string;
  withExternalRedirect?: true;
};

type AsideNavigationMenuProps = {
  navigationItems: ReadonlyArray<NavigationItem>;
  activeItemIndex: number;
};

export const AsideNavigationMenu = ({
  navigationItems,
  activeItemIndex,
}: AsideNavigationMenuProps) => {
  const totalItems = navigationItems.length;
  const progressPercentage = (activeItemIndex / (totalItems - 1)) * 100;

  return (
    <aside className="md:block hidden mt-8 lg:ml-4 px-4 py-2 min-w-fit lg:min-w-[21rem] font-sans">
      <div className="md:block top-24 sticky border-slate-700 hidden pr-8 border-l border-dashed ">
        <div className="ml-2 mb-4">
          <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-width duration-300 ease-in-out"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="mt-4">
          <ul className="flex flex-col gap-4 py-4 w-full max-h-[80vh] overflow-y-auto pr-4 scrollbar">
            {navigationItems.map((item, index) => (
              <li
                className={`flex items-center hover:border-slate-400 pl-4 hover:border-l transition-all duration-300 ease-in-out ${
                  index === activeItemIndex ? "border-l-2 border-blue-500" : ""
                }`}
                key={index}
              >
                <Link
                  className="font-medium group"
                  href={
                    item.href.startsWith("http") ? item.href : `#${item.href}`
                  }
                  target={item.withExternalRedirect ? "_blank" : "_self"}
                >
                  <span
                    className={`group-hover:text-title block text-sm transform transition-transform group-hover:translate-x-[3px] ease-in-out transition-color duration-300 ${
                      index === activeItemIndex ? "text-blue-500" : ""
                    }`}
                  >
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
      </div>
    </aside>
  );
};
