import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Todo from './screens/Todo';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="max-w-3xl mt-12 mx-auto px-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/todo/:id" element={<Todo />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
