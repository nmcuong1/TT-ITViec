import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './pages/homepage';
import { BrowserRouter, Router} from 'react-router-dom';
import RouterITVIEC from './route';
import './style/styte.scss'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <RouterITVIEC/>
    </BrowserRouter>
);

