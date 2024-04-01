import Image from "next/image";
import { FC } from "react";

const navigationItems = [
  {
    slug: "home",
    label: "Home",
  },
  {
    slug: "shop",
    label: "Shop",
    children: [],
  },
  {
    slug: "about-us",
    label: "About Us",
  },
  {
    slug: "blog",
    label: "Blog",
  },
  {
    slug: "contact-us",
    label: "Contact Us",
  },
];

const Navigation: FC = () => {
  return (
    <div className="flex justify-center items-center relative mx-40">
      <ul className="flex items-center gap-10">
        {navigationItems.map((item) => (
          <li
            key={item.slug}
            className="flex text-center items-center whitespace-nowrap"
          >
            {item.label}

            {item.children && (
              <Image
                src="/icons/huge-icon/arrows/solid/direction-down 01.svg"
                alt=""
                width="24"
                height="24"
              />
            )}
          </li>
        ))}
      </ul>

      {/* Categories */}
      <div className="flex items-center bg-[#A5A9AC] bg-opacity-5 px-5 p-3 absolute left-0">
        <Image
          className="mr-4"
          src="/icons/huge-icon/menu/solid/menu-line-horizontal.svg"
          alt=""
          width="24"
          height="24"
        />
        <span>All Categories</span>
        <Image
          className="ml-28"
          src="/icons/huge-icon/arrows/solid/direction-down 01.svg"
          alt=""
          width="24"
          height="24"
        />
      </div>
    </div>
  );
};

export default Navigation;
