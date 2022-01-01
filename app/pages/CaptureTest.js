import React, {useState, Component} from 'react';

import CaptureSign from './CaptureSign'

 export default function CaptureTest() {
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
