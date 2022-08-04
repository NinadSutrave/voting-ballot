import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import VoteForm from './components/VoteForm.js'
import Login from './components/Login.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="section2">
          <Routes>
            <Route path="/admin" element={<Login />} />
            <Route path="/voter" element={<VoteForm />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
