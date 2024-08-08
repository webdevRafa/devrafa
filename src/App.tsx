import { BgImage } from "./components/BgImage";
import { Navbar } from "./components/Navbar";
import { Welcome } from "./components/Welcome";

function App() {
  return (
    <>
      <Navbar />

      <BgImage />

      <Welcome />
      <div className="h-[5000px] bg-white relative z-40"></div>
    </>
  );
}

export default App;
