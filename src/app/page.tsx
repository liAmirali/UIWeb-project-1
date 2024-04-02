import MainHero from "@/components/homepage/MainHero";
import OnSaleProducts from "@/components/homepage/OnSaleProducts";
import ProductGrid from "@/components/homepage/ProductGrid";
import ShopCategories from "@/components/homepage/ShopCategories";

export default function Home() {
  return (
    <div>
      <MainHero />

      <ShopCategories />

      <OnSaleProducts />

      <ProductGrid
        heading="Our Best Seller Products"
        products={[
          {
            title: "Apple iPad Pro Wi-Fi",
            price: 1520,
            image: "/images/products/best-sellers/PngItem_1757515 1.png",
            rating: 5,
          },
          {
            title: "Apple iPad Mini 6 Wi-Fi",
            price: 500,
            image: "/images/products/best-sellers/image 19.png",
            rating: 4,
          },
          {
            title: "Microsoft Surface Go",
            price: 399,
            image: "/images/products/best-sellers/image 20.png",
            rating: 5,
          },
          {
            title: "LG 4K Ultra UHD TV",
            price: 5500,
            image: "/images/products/best-sellers/image 21.png",
            rating: 5,
          },
          {
            title: "Samsung Galaxy S22 Ultra",
            price: 1350,
            image: "/images/products/best-sellers/image 18.png",
            rating: 3,
          },
          {
            title: "Apple iPhone 14 Plus",
            price: 850,
            image: "/images/products/best-sellers/image 22.png",
            rating: 5,
          },
          {
            title: "Bose QuietComfort 45",
            price: 300,
            image: "/images/products/best-sellers/image 17.png",
            rating: 5,
          },
        ]}
      />
    </div>
  );
}
