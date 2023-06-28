import { Routes, Route } from 'react-router-dom';
import PostPage from './pages/PostPage';
import About from './pages/About';
import Nav from './components/UI/navigation/Nav';
import Footer from './components/UI/footer/Footer';

const App = () => {
   return (
      <>
         <Nav />
         <Routes>
            <Route element={<PostPage />} path="/" />
            <Route element={<About />} path="/about" />
         </Routes>
         <Footer />
      </>
   );
};

export default App;
