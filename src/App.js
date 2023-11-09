import Banner from "./components/Banner";
import ClothingSection from "./components/ClothingSection";
import Footer from "./components/Footer";
import InfoBanner from "./components/InfoBanner";
import InfoTopbar from "./components/InfoTopbar";

function App() {
  return (
    <div>
      <InfoTopbar />
      <Banner />
      <InfoBanner />
      <ClothingSection />
      <Footer />
    </div>
  );
}

export default App;
