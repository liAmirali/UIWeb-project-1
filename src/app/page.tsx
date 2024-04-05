import CoverCallToAction from "@/components/common/CoverCallToAction";
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

      <CoverCallToAction
        bgImageUrl="/images/bg/iphone-bg.png"
        heading="Apple iPhone 13 Pro Max"
        description="Don’t miss the last opportunity."
        buttonLabel="Shop Now"
      />

      <ProductGrid
        heading="Top Selling Products"
        products={[
          {
            title: "Apple iPad Pro Wi-Fi",
            price: 1520,
            image: "/images/products/top-selling/image 32.png",
            rating: 5,
          },
          {
            title: "Panasonic Lumix DC-GH5 II",
            price: 1500,
            image: "/images/products/top-selling/image 24.png",
            rating: 4,
          },
          {
            title: "Asus ROG Delta S",
            price: 250,
            image: "/images/products/top-selling/image 25.png",
            rating: 5,
          },
          {
            title: "Xiaomi Fimi X8 Mini",
            price: 650,
            image: "/images/products/top-selling/image 26.png",
            rating: 5,
          },
          {
            title: "Apple iPhone 13",
            price: 500,
            image: "/images/products/top-selling/image 27.png",
            rating: 3,
          },
          {
            title: "Fossil Gen 6 Smart Watch",
            price: 450,
            image: "/images/products/top-selling/image 28.png",
            rating: 5,
          },
          {
            title: "Apple iPad Air Wi-Fi",
            price: 850,
            image: "/images/products/top-selling/image 29.png",
            rating: 5,
          },
        ]}
      />
    </div>
  );
}
