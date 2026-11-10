/* QR Atelier: bootstrap real con React 18 + Vite, sin ningún framework de UI adicional. */
import React from 'react';
import * as ReactDOMLegacy from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles.css';
// Compartimos la misma aplicación React con la edición de archivo HTML autónomo.
window.React = React;
window.ReactDOM = { ...ReactDOMLegacy, createRoot };
import('./studio.js');
