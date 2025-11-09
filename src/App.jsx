import Navbar from './components/Navbar'
import { navData } from "./data";
import Search from './components/Search'
import FilterBar from './components/FilterBar'
import CardGallery from './components/CardGallery'
import CreativeCloud from './components/CreativeCloud'
import ProjectGallery from './components/ProjectGallery'
import Footer from './components/Footer'

 
 const App = () => {
     // Event handler for buttons
  const handleButtonClick = (action) => {
    switch (action) {
      case "signin":
        alert("Sign In button clicked!");
        break;
      case "signup":
        alert("Sign Up button clicked!");
        break;
      case "feature":
        alert("Feature button clicked!");
        break;
      case "adobe":
        alert("Adobe button clicked!");
        break;
      default:
        console.log("Unknown action");
    }
  };

   return (
      <main>
        <Navbar data={navData} onButtonClick={handleButtonClick} />
        <Search/>
        <FilterBar/>
        <CardGallery/>
        <CreativeCloud/>
        <ProjectGallery/>
        <Footer/>
      </main>
   )
 }
 
 export default App
 