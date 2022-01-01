import React, {useState} from 'react';

import CaptureSign from './pages/CaptureSign'

export default function App() {
  const handleOK = (signature) => {
    if(signature.nativeEvent){
      let newX = signature.nativeEvent.offsetX;
      let newY = signature.nativeEvent.offsetY;
      console.log(newX);
      console.log(newY);
    }
  };

  return (
    <>
      <CaptureSign onOk={handleOK}/>
    </>
  );
}
