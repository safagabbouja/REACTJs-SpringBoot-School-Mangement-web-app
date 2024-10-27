import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import ListeNote from './partials/dashboard/notecomponents/ListeNote';
 import Editnote from './partials/dashboard/notecomponents/Editnote';
import Addnote from './partials/dashboard/notecomponents/Addnote';
import Updatenew from './partials/dashboard/actualitecomponent/Updatenew';
import CreateNew from './partials/dashboard/actualitecomponent/CreateNew';
import ListeActualite from './partials/dashboard/actualitecomponent/Gerer_actualite';
import Newsboard from './partials/dashboard/actualitecomponent/Newsboard';
import Newsboarda from './partials/dashboard/courcomponent/Newsboarda';
import AppLayout from './partials/dashboard/actualitecomponent/AppLayout';
import AppLayouta from './partials/dashboard/courcomponent/AppLayouta';
import Timetables from './partials/dashboard/Timetables';
import SignIn from './partials/SignIn';
import Signup from './partials/Signup';
import ListeNota from './partials/dashboard/notecomponents/ListeNota';
import Gerer_Cours from './partials/dashboard/courcomponent/Gerer_Cours';
function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
         <Route path='/listnote' element={<ListeNote />} />
         <Route path='/ListeNota' element={<ListeNota />} />
         <Route path='/addnote' element={<Addnote />} />
        <Route path='/editnote/:id' element={<Editnote />} /> 
        <Route path='/Newsboard' element={<AppLayout />} />
        <Route path='/Newsboarda' element={<AppLayouta />} />

        <Route path='/Updatenew/:id' element={<Updatenew />} />
        <Route path='/CreateNew' element={<CreateNew />} />
        <Route path='/Gerer_actualite' element={<ListeActualite />} />
        <Route path='/Gerer_Cours' element={<Gerer_Cours />} />

        <Route path='/Timetables' element={<Timetables />} />
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/Signup' element={<Signup />} />



        

      </Routes>
    </>
  );
}

export default App;
