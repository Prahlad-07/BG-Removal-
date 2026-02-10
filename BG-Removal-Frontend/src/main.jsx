import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ClerkProvider} from "@clerk/clerk-react";
import AppContextProvider from "./context/AppContext.jsx";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_placeholder';

// Only throw error if in production
if (!import.meta.env.VITE_CLERK_PUBLISHABLE_KEY && import.meta.env.PROD) {
    throw new Error('Missing Clerk Publishable Key');
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
            <AppContextProvider>
                <App />
            </AppContextProvider>
        </ClerkProvider>
    </BrowserRouter>
)
