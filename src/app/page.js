import Delivery from "./components/Delivery";
import Discount from "./components/Discount";
import Main from "./components/Main";
import Products from "./components/Products";

export default function Home() {
  return (
    <main className="">
      <Main />
      <Products />
      <Discount />
      <Delivery />
    </main>
  )
}
