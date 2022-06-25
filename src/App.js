import './App.css';
import NavBar from "./components/NavBar/NavBar";
import BigBanner from "./components/BigBanner/BigBanner";
import FilterBanner from "./components/FilterBanner/FilterBanner";
import ClientCard from "./components/ClientCard/ClientCard";
import bol from "./assets/bol.jpg"
import kempen from "./assets/kempen.jpg";
import philips from "./assets/philips.jpg";
import gemeentemuseum from "./assets/gemeentemuseum.jpg"
import ScaledLeft from "./components/ScaledCards/ScaledLeft/ScaledLeft";
import florensis from './assets/florensis.jpg';
import belightning from "./assets/belightning.jpg";
import tui from './assets/tui.jpg'
import chocomel from './assets/chocomel.jpg';
import jbl from "./assets/jbl.jpg";
import zalando from "./assets/zalando.jpg";
import koninklijkebibliotheek from './assets/koninklijkebibliotheek.jpg'
import ScaledRight from "./components/ScaledCards/ScaledRight/ScaledRight";
import ClientQuote from "./components/ClientQuote/ClientQuote";
import libertyglobal from "./assets/libertyglobal.jpg";
import arla from "./assets/arla.jpg";
import ClientsGrid from "./components/ClientsGrid/ClientsGrid";

function App() {
  return (
    <div className="App">
      <NavBar />
        <main className="main_content">

        <BigBanner />
          <FilterBanner />

          <section className="client_cards">
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
          </section>

          <ScaledLeft client="Florensis"
                      text="Rethinking the ecosystem"
                      src={florensis}
                      alt="Florensis"
          />

          <section className="client_cards">
            <ClientCard
                client="Be Lightning"
                text="Delivering clarity on a global scale"
                src={belightning} alt="Be Lightning"
            />
            <ClientCard
                client="TUI"
                text="Swipe to find your next holiday destination"
                src={tui} alt="TUI"
            />
          </section>

          <ScaledRight client="Florensis"
                       text="Rethinking the ecosystem"
                       src={florensis}
                       alt="Florensis"
          />

          <section className="client_cards">
            <ClientCard
                client="Chocomel"
                text="A campaign for the limited edition letter packs"
                src={chocomel} alt="Chocomel"
            />
            <ClientCard
                client="JBL"
                text="Live like a champion with Jerome Boateng"
                src={jbl} alt="Kempen"
            />
            <ClientCard
                client="Zalando"
                text="Innovative SEO and content strategy for Zalando"
                src={zalando} alt="Philips"
            />
            <ClientCard
                client="Koninklijke Bibliotheek"
                text="The search of the most influential book ever"
                src={koninklijkebibliotheek} alt="Gemeentemuseum"
            />
          </section>

          <ClientQuote quote="Dept helped us tell our story through a bold new identity and a robust online experience. To the tone of 60% growth in online bookings in just one month"
                       by="Mattijs ten drink - CEO, Transavia"
          />

          <section className="client_cards">
            <ClientCard
                client="Liberty Global"
                text="Delivering complex commerce solutions"
                src={libertyglobal} alt="Liberty Global"
            />
            <ClientCard
                client="Arla"
                text="Swipe to find your next holiday destination"
                src={arla} alt="Arla"
            />
          </section>

          <ClientsGrid />

        </main>
    </div>
  );
}

export default App;
