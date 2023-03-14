import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlesListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
        <div className='overflow-hidden'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/articles" element={<ArticlesListPage />} />
            <Route path="/articles/:articleId" element={<ArticlePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
