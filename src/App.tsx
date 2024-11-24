import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/main-page';
import Navigation from './components/navigation/navigation';

function App() {
  const navItems = [
    { path: '/', label: '홈' },
    { path: '/about', label: '소개' },
    { path: '/contact', label: '연락처' }
  ];

  return (
    <BrowserRouter>
      <Navigation items={navItems} />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
