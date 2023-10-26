import Banner from "./components/Banner";
import InfoBanner from "./components/InfoBanner";
import InfoTopbar from "./components/InfoTopbar";

function App() {
  return (
    <div className="bg-black">
      <InfoTopbar />
      <Banner />
      <InfoBanner />
    </div>
  );
}

export default App;
