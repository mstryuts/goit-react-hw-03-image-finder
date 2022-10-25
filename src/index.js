import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function deleteNth(arr, n) {
  const cache = {};

  return arr.filter(v => {
    cache[v] = (cache[v] || 0) + 1;

    return cache[v] <= n;
  });
}

console.log(deleteNth([20, 37, 20, 21], 1));
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3));
console.log(deleteNth(['a', 'b', 'a', 'b', 'a'], 2));
