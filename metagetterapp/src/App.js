import Navbar from './Components/Navbar/Navbar';
import HomePage from './Components/Pages/HomePage';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from "react-router-dom";
import CreateQuiz from './Components/Pages/CreateNewQuiz/CreateQuiz';
import MyQuiz from './Components/Pages/MyQuizzes/MyQuiz';
import PlayQuiz from './Components/Pages/PlayQuiz/PlayQuiz';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div  >
      <Navbar />
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-new" element={<CreateQuiz />} />
      <Route path="/my-quiz" element={<MyQuiz />} />
      <Route path="/play-quiz" element={<PlayQuiz />} />
      <Route path='*' element={<NotFound />}/>


      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
