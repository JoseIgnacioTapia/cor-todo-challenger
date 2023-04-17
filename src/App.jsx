import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './screens/Home';
import Todo from './screens/Todo';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;
