import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Footer from "./components/Footer";
import "./scss/App.scss";
import data from "./data"

function App() {
  return (
    <div className="App">
      <Header />
      <Card data={data} />
      <Footer />
    </div>
  );
}

export default App;
