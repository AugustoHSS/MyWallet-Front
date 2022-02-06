import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Movements() {
  const location = useLocation();
  const { state } = location;
  console.log(state.isOutput);
  return (
    <>

    </>
  );
}
