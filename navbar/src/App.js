import React from 'react';
import Navbar from './Navbar';
import './App.css';

// const Navbar = () => {
//   return (
//     <nav>
//       <h1>My App</h1>
//       <ul>
//         <li><Link to="/monitoring">Monitoring</Link></li>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//         <li><Link to="/timepass">Dashboard</Link></li>
//       </ul>
//     </nav>
//   );
// };

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
