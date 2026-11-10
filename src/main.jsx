import React from 'react';
import { createRoot } from 'react-dom/client';
import './qr-engine.js';
import './styles.css';
import StudioPro from './studio.js';

const root = document.getElementById('root');
if (!root) throw new Error('No se encontró el contenedor React.');
createRoot(root).render(React.createElement(React.StrictMode, null, React.createElement(StudioPro)));
