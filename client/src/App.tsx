import React from 'react';
import { Footer } from './components/footer.component';

const App: React.FC = () => {

  const clickHandler = async() => {
    const res = await fetch('http://localhost:5000/api/auth/reg',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({login: 'atgbt',password: '33333'})
    });
    const data = await res.json();
    console.log(data);
    return data;
  }

  return (
    <div className="App">
      <header className="App-header">
        init commit
      </header>
      <button onClick={clickHandler}>Fetch data</button>
      <Footer/>
    </div>
  );
};

export default App;
