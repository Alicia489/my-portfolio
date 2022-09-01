import './App.css';
import "./styles/base.scss";
import Header from './components/Header';
import Home from './modules/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
