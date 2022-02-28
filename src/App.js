import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/Pages/NotFound/NotFound';
import Home from './components/Pages/Home/Home';
import Note from './components/Pages/Note/Note';

function App() {
  return (
    <div className="App">
      
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:id" element={<Note />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
