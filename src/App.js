import React, { useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/Logs/Logs';
import Adbtn from './components/layout/Addbtn';
import Addlogsmodal from './components/Logs/Addlogsmodal';
import Editlogsmodal from './components/Logs/Editlogsmodal';
import Addtechmodal from './components/techs/Addtechmodal';
import Techlistmodal from './components/techs/Techlistmodal';
import { Provider } from 'react-redux';
import store from './store';
function App() {
  useEffect(() => {
    // to initialize Materialize js.
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <div className='App'>
        <SearchBar />
        <div className='container'>
          <Adbtn />
          <Addlogsmodal />
          <Addtechmodal />
          <Techlistmodal />
          <Logs />
          <Editlogsmodal />
        </div>
      </div>
    </Provider>
  );
}

export default App;
