import Delivery from "./components/Delivery";
import Discount from "./components/Discount";
import Main from "./components/Main";
import NowInTrending from "./components/NowInTrending";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="w-screen">
      <Main />
      <Products />
      <Discount />
      <Delivery />
      <NowInTrending />
    </main>
  )
}
