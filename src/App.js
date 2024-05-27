import { Route , Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Naslovna from './Components/Naslovna';
import Metkovic from './Components/Metkovic';
import Maraton from './Components/Maraton';
import Norin from './Components/Norin';
import Header from './Components/Header';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
        <Routes>
          <Route path='/' element={<Naslovna></Naslovna>}></Route>
          <Route path='/metkovic' element={<Metkovic></Metkovic>}></Route>
          <Route path='/maraton' element={<Maraton></Maraton>}></Route>
          <Route path='/norin' element={<Norin></Norin>}></Route>
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
