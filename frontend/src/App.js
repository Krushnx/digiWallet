import React from 'react';

import MYROuter from './router';
import axios from "axios";
import { AuthContextProvider } from "./context/authcontext";

axios.defaults.withCredentials = true;

function App() {
  return (
    <AuthContextProvider>
      <MYROuter />
    </AuthContextProvider>
  );
}

export default App;
