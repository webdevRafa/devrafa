import { BgImage } from "./components/BgImage";
import { Navbar } from "./components/Navbar";
import { ProductList } from "./components/ProductList";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Navbar />
      <div className="mb-[100px]">
        <BgImage />
        <Welcome />
      </div>
      <ProductList />

      <div className="h-[5000px] bg-white relative z-40"></div>
    </>
  );
}

export default App;
