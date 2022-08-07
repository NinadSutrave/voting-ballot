import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js'
import VoteForm from './components/VoteForm.js'
import Login from './components/Login.js'
import Footer from './components/Footer.js'
import Dashboard from './components/Dashboard.js'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="section2">
          <Routes>
            {
              (localStorage.getItem('SECRET_TOKEN') === process.env.REACT_APP_SECRET_TOKEN)?
              <Route path="/admin" element={<Dashboard />} />:
              <Route path="/admin" element={<Login />} />              
            }
            <Route path="/" element={<VoteForm />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
