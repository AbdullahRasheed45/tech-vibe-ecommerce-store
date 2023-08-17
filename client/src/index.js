import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM from react-dom/client
import App from './App'; // Import your main App component
import {Provider} from "react-redux"
import {store, persistor} from "./redux/store"
import { PersistGate } from 'redux-persist/integration/react';

// Create a root using ReactDOM.createRoot and render the App component inside it
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);
