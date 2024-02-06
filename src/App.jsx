import { Route, Routes } from 'react-router-dom';
import Header from './components/layout/Header';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ToursPage from './pages/ToursPage';

export default function App() {
  console.log('App susikure');
  return (
    <div className='App container'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/tours' element={<ToursPage />} />
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes>
      <hr />
      
    </div>
  );
}
