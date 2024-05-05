import './App.css';
import About from './components/About';
import Banner from './components/Banner';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Fourth from './components/Fourth';
import Kids from './components/Kids';
import Navbar from './components/Navbar';
// import Questions from './components/Questions';
import Third from './components/Third';




function App() {
  return (
  <>
   <Navbar/>
   <Banner/>
   <About/>
   <Third/>
   <Fourth/>
   <Kids/>
   <FAQ/>
   {/* <Questions/> */}
   <Footer/>
   
   
   
   </>
   
  );
}

export default App;
