import { createRoot } from 'react-dom/client';
import React, { StrictMode } from 'react';
import App from './App';

const rootElement : Element = document.getElementById('root') as Element;
const root = createRoot(rootElement);

root.render(<StrictMode><App /></StrictMode>);
