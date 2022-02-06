import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import GlobalStyles from './GlobalStyles';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Statement from './Pages/Statement';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/statement" element={<Statement />} />
      </Routes>
      <GlobalStyles />
    </BrowserRouter>
  );
}
