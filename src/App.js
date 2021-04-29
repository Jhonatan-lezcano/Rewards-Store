import "./App.css";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import ListProducts from "./components/ListProducts/ListProducts";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Banner />
        <Filters />
        <ProductsProvider>
          <ListProducts />
        </ProductsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
