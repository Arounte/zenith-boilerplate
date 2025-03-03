import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import { HeroUIProvider } from '@heroui/react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <HeroUIProvider>
            <App />
        </HeroUIProvider>
    </React.StrictMode>,
);
