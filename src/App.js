import "./styles.css";
import Nav from "./Components/Navigation";
import Home from "./Components/Home";
import Statistics from "./Components/Statistics";
import Boost from "./Components/Boost";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="pt-3">
      <Nav />
      <Home />
      <Statistics />
      <Boost />
      <Footer />
    </div>
  );
};

export default App;
