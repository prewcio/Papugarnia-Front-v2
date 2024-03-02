import React, {lazy} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import './index.css';
import './pages/elements.css';
import banner from "./assets/banner.webp";
import logo from './assets/papugarnia-logo.webp';
import { AuthProvider } from './pages/elements/worker/context/AuthContext';
import Loader from './pages/elements/Loader';
import { WavyContainer } from 'react-wavy-transitions';
import Snowfall from 'react-snowfall';
import Regulamin from './pages/Regulamin';
import WorkDashboard from './pages/elements/worker/Dashboard';
import Papugi from './pages/elements/papugi/Papugi';
import Login from './pages/elements/worker/Login';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
document.head.innerHTML += `<link rel="preload" as='image' href=`+banner+`/>
<link rel="preload" as='image' href=`+logo+`/>`;


const dzis = new Date();
const snieg = ((dzis.getDate()>10 && dzis.getMonth() === 11) || (dzis.getDate()<25 && dzis.getMonth()===0));

const Footer = lazy(() => import("./pages/onTopElements/Footer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Welcome = lazy(() => import('./pages/Welcome'));
const Header = lazy(() => import( "./pages/onTopElements/Header"));

document.head.innerHTML+=`
<!--
      . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
      . . . . . . . . . . . . . . . . /**#///#((####%%#%#%( . . .
      . . . . . . . . . . . . . . /***(/#((#%%&. %&@.    */,.%  . 
      . . . . . . . . . . . . ./*//(((###/*, ,@&@.%(.@@*..., /( . 
      . . . . . . . . . . . *(**(*/,,,,*,,*%*   @&*./@ # &#####%.
      . . . . . . . . . .  ,@@(//,,.,,.,,,*&.        . &%&%%#%%#%
      . . . . . . . . . . .#@//(%#**..,.,,,&%     .    #@@@&@&%&%%
      . . . . . . . . . . .&@,(/*,,,*/*,**,,(&* ..  %@@@@&@&&%@&&&
      . . . . . . . . . .*@/(#.%&**,**,,,,,,#&&%.%@@@@@@@ . . &&@
      . . . . . . . . . ./@((%%%%/(/#(**,**%((#@@@@@@@@&@@@@.%&@.
      . . . . . . . . .#((##/&(/@%*/,//**,,((*/*(@/@& . . . . @ . 
      . . . . . . . ./%#(/%(##&/**,**/*,((##%&/%*/(@# . . . . . . 
      . . . . . .(((##((##%(((##*,..,,,,,,,,,//(/// . . . . . . .
      . . . . #@((//(/*(####%(#(/,,,,,,**,,,*,**//* . . . . . . .
      . . . . @*/#/#/(/##(#(#%%#((/,,*,**/******///*. . . . . . . 
      . . . &(,*#/&(#(#%%%%&#%###(**,,***//*/*///(//. . . . . . . 
      . .  @#/%/#%/(#%##&&&%%#&%(///*/*****(//*(((& . . . . . . .
      . . @,*(#(((%###&@&&&%%@&%#(/*/,*/*****//*/(&&. . . . . . .
      . . &,@/(#(##%##%@&&&%&%&@/(////*///((/(*//(@&& . . . . . . 
      . @@%,(/((/(##(##&&&&&%&&&##((////((((#((((/@&& . . . . . . 
      .@@/#@/(#/#####%#%&@%&&%&%(((((/((#(((((((/@@&. . . . . . .
      &@(&%%//#(((##%%%%%%&&&&#%#((((((((((((/((@@@&             
      .&&@%(#(#(((#%###%%%&&&&&%((#(#%#((###%(((&@@@  . . . . . . 
      ,&(/(/(%&%##%#%#%%&&&&&&&%(((###(###(#(#((@@&& . . . . . . .
      
      Blue Cię obserwuje! Nie warto zaglądać tutaj. Tutaj nic ciekawego nie ma.
    -->
`;

root.render(
  <Router>
    <AuthProvider>
      <Loader />
      <WavyContainer />
      <Header />
      {snieg &&
      <Snowfall
      // The color of the snowflake, can be any valid CSS color.
      color="#d4d4d4"
      style={{
        position: 'fixed',
        height: '100vh',
        width: '100vw',
        zIndex: '2',
      }}
      // Controls the number of snowflakes that are created (defaults to 150).
      snowflakeCount={75}
      />
    }
    <Routes>
      <Route path='/' element={<Welcome />} />
      
      {/* Papugarnie */}
      <Route path='/papugarnia/warszawa' element={<Navigate to="/"/>}/> {/* Jerozolimskie 200 */}

      {/* Regulamin */}
      <Route path='/regulamin' element={<Regulamin />} />

      {/* Papugi */}
      {/* <Route path='/papugi' element={<Papugi />} /> */}

      {/* Worker Menu */}
      <Route path='/worker/login' element={<Login />} />
      <Route path='/worker' element={<Navigate to="/worker/login" />} />

      <Route path='/worker/dashboard' element={<WorkDashboard />} />

      <Route path='*' element={<NotFound />}/>


    </Routes>
    <Footer />
    </AuthProvider>
  </Router>
);
