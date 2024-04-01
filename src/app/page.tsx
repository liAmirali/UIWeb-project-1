import MainHero from "@/components/homepage/MainHero";
import OnSaleProducts from "@/components/homepage/OnSaleProducts";
import ShopCategories from "@/components/homepage/ShopCategories";

export default function Home() {
  return (
    <div>
      <MainHero />

      <ShopCategories />

      <OnSaleProducts />
    </div>
  );
}
