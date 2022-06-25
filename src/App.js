import './App.css';
import NavBar from "./components/NavBar/NavBar";
import BigBanner from "./components/BigBanner/BigBanner";
import FilterBanner from "./components/FilterBanner/FilterBanner";
import ClientCard from "./components/ClientCard/ClientCard";
import bol from "./assets/bol.jpg"
import kempen from "./assets/kempen.jpg";
import philips from "./assets/philips.jpg";
import gemeentemuseum from "./assets/gemeentemuseum.jpg"
import ClientScaledLeft from "./components/ClientScaledLeft/ClientScaledLeft";
import florensis from './assets/florensis.jpg';

function App() {
  return (
    <div className="App">
      <NavBar />
        <div className="main_content">

        <BigBanner />
          <FilterBanner />

          <div className="client_cards">
            <ClientCard
                client="Bol.com"
                text="A Summer island in the Netherlands"
                src={bol} alt="Bol.com"
            />
            <ClientCard
                client="Kempen"
                text="Not some average banking website"
                src={kempen} alt="Kempen"
            />
            <ClientCard
                client="Philips"
                text="Beautiful design meets innovative technology"
                src={philips} alt="Philips"
            />
            <ClientCard
                client="Gemeentemuseum"
                text="A 100 years of Mondriaan & De Stijl"
                src={gemeentemuseum} alt="Gemeentemuseum"
            />
          </div>

          <ClientScaledLeft client="Florensis"
                            text="Rethinking the ecosystem"
                            src={florensis}
                            alt="Florensis" />
        </div>
    </div>
  );
}

export default App;
