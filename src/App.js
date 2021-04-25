import "./App.css";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import ListProducts from "./components/ListProducts/ListProducts";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Filters />
      <ListProducts />
    </div>
  );
}

export default App;
