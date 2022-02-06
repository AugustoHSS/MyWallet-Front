import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Statement from './Pages/Statement';
import Movements from './Pages/Movements';
import UserContext from './contexts/userContext';

export default function App() {
  const [loginResponse, setLoginResponse] = useState({});
  const value = React.useMemo(() => ({ loginResponse, setLoginResponse }), [loginResponse]);
  return (
    <UserContext.Provider value={value}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/movements" element={<Movements />} />
        </Routes>
        <GlobalStyles />
      </BrowserRouter>
    </UserContext.Provider>
  );
}
