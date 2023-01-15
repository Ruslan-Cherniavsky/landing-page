import { Route, Routes } from 'react-router-dom'


import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage';
import Header from './components/HeaderComp';
import Footer from './components/FooterComp';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';


function App() {

  return <>
    <Header />
    <div className='background'>

      <main className="container content" >
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/ProjectsPage" element={<ProjectsPage />} />
          <Route path="/ContactPage" element={<ContactPage />} />

        </Routes>
      </main>
    </div>

    <Footer />
  </>;
}

export default App;