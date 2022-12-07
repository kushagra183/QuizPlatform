import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import CreateQuiz from './Components/Pages/CreateNewQuiz/CreateQuiz';

function App() {
  return (
    <div  >
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-new" element={<CreateQuiz />} />

      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
