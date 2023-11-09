import Banner from "./components/Banner";
import ClothingSection from "./components/ClothingSection";
import InfoBanner from "./components/InfoBanner";
import InfoTopbar from "./components/InfoTopbar";
import Prov from "./components/Prov";

function App() {
  return (
    <div>
      <InfoTopbar />
      <Banner />
      <InfoBanner />
      <ClothingSection />
      <Prov />
    </div>
  );
}

export default App;
