import React, {useState, Component} from 'react';

import Canvas from './Canvas'

 export default function ExLiterature() {
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
       <Canvas onOk={handleOK}/>
     </>
   );
 }
