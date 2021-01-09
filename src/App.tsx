import React from 'react';
import { Footer } from './components/footer.component';
import { Header } from './components/header.commponent';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Footer/>
    </div>
  );
};

export default App;
