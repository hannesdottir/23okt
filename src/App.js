import Banner from "./components/Banner";
import ClothingSection from "./components/ClothingSection";
import InfoBanner from "./components/InfoBanner";
import InfoTopbar from "./components/InfoTopbar";

function App() {
  return (
    <div className="bg-black">
      <InfoTopbar />
      <Banner />
      <InfoBanner />
      <ClothingSection />
    </div>
  );
}

export default App;
