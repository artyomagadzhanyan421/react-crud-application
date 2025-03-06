import './App.css';
import { Routes, Route } from "react-router";

// Components
import Home from './routes/Home';
import Job from './routes/Job';
import Edit from './routes/Edit';
import Create from './routes/Create';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/job/:id" element={<Job />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  )
}

export default App