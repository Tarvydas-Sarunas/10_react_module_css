import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './styles/App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';

export default function App() {
  console.log('App susikure');
  return (
    <div className='App container'>
      <Header />
      <hr />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='*' element={<h1>404 page not found</h1>} />
      </Routes>
      <hr />
      
    </div>
  );
}
