import React from 'react';
import Sidebar from './Sidebar';
import './App.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Sidebar</h2>
//       <ul>
//         <li><Link to="/monitoring">Monitoring</Link></li>
//         <li><Link to="/dashboard">Dashboard</Link></li>
//       </ul>
//     </div>
//   );
// };


function App() {
  return (
    <div className="App">
      <Sidebar />
    </div>
  );
}

export default App;
