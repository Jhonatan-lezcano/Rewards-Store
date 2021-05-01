import "./App.css";
import Banner from "./components/Banner/Banner";
import Filters from "./components/Filters/Filters";
import Header from "./components/Header/Header";
import ListProducts from "./components/ListProducts/ListProducts";
import { PaginationProvider } from "./context/PaginationContext";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Banner />
        <PaginationProvider>
          <Filters />
          <ProductsProvider>
            <ListProducts />
          </ProductsProvider>
        </PaginationProvider>
      </UserProvider>
    </div>
  );
}

export default App;
