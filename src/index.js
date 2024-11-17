import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



const App = () => {
  const num1 = 170;
  const num2 = 150;

  return (
    <h1>{num1 > num2 ? num1 : num2}</h1>
  );
};





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


