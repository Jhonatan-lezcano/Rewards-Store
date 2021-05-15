import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/layouts/Home/Home";
import { PaginationProvider } from "./context/PaginationContext";
import { ProductsProvider } from "./context/ProductsContext";
import { UserProvider } from "./context/UserContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Recharge from "./components/layouts/Recharge/Recharge";
import History from "./components/layouts/History/History";
import Error from "./components/layouts/Error/Error";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <Header />
          <PaginationProvider>
            <ProductsProvider>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/recharge">
                  <Recharge />
                </Route>

                <Route path="/history">
                  <History />
                </Route>

                <Route>
                  <Error />
                </Route>
              </Switch>
            </ProductsProvider>
          </PaginationProvider>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
