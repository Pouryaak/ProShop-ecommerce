import { Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Switch>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/product/:id" component={ProductScreen} />
          </Switch>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
