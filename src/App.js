
import './App.css';
import Navbars from './Component/nav';
import Home from './Component/home'
import Footer from './Component/footer';
import Section from './Component/section';
function App() {
  return (
    <div className="App">
      <header>
        <Navbars />
      </header>
      <main id="main">
        <section id="home" >
          <Home />
          </section>
          <section id="middel">
          <Section/>
        </section>
        <footer>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;
