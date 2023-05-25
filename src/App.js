import Header from './components/Header';
import Characters from './pages/Characters';
import Character from './pages/Character';
import NewCharacter from './pages/NewCharacter';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route } from 'react-router-dom';

function App() {
	
  return (
    <>
      <Helmet>
        <meta charSet='utf-8' />
        <title>Rick & Morty</title>
      </Helmet>
      <header>
        <div className='container'>
          <Header />
        </div>
      </header>
      <main>
        <div className='container'>
          <Routes>
            <Route exact path='/' element={<Characters />} />
            <Route exact path='/character/:character' element={<Character />} />
            <Route exact path='/new-character' element={<NewCharacter />} />
            <Route exact path='*' element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <footer>
        <div className='container'>
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;
