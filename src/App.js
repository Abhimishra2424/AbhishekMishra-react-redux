import { Header, ProductDetail, ProductListing } from "./containers";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "./components/NotFound";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:id" exact component={ProductDetail} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
