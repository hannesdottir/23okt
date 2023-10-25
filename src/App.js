import Banner from "./components/Banner";
import InfoTopbar from "./components/InfoTopbar";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black">
      <InfoTopbar />
      <Navbar />
      <Banner />
    </div>
  );
}

export default App;
