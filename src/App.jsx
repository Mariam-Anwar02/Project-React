import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ContainerComponent from './Components/ContainerComponent';
import ProductList from './Components/ProductList';
import ViewWomenDetails from './Components/ViewWomenDetails';
import SpreadshopBanner from './Components/SpreadshopBanner';
import VideoComponent from './Components/VideoComponent';
import IconsComponent from './Components/IconsComponent';
import ViewAccDetails from './Components/ViewAccDetails'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <ContainerComponent />
              <ProductList />
              <VideoComponent />
              <IconsComponent />
              <SpreadshopBanner />
            </>
          }
        />
      <Route path="/ViewWomenDetails/:id" element={<ViewWomenDetails />} />
      <Route path="/ViewAccDetails/:id" element={<ViewAccDetails />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
