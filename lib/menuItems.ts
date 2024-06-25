

export type Product = {
  name: string;
  image: string;
  link: string;
  size?: string;
  calories?: number;
  price?: string;
};

export type SubItem = {
  category: string;
  products: Product[];
};

export type Item = {
  name: string;
  image: string;
  link: string;
  subItems: SubItem[];
};

export type Category = {
  category: string;
  items: Item[];
};
// lib/utils.ts

export const Menu: Category[] = [
  // Drinks
  {
    category: "Drinks",
    items: [
      {
        name: "Hot Coffees",
        image: "/hot cofee.avif",
        link: "hot-coffees",
        subItems: [
          {
            category: "Americanos",
            products: [
              {
                name: "Caffè Americano",
                image: "/to.avif",
                link: "caffe-americano",
              },
            ],
          },
        ],
      }
    ]
  }
  ]