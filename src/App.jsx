import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <SideMenu />
      <Footer />
    </div>
  );
}

export default App;
