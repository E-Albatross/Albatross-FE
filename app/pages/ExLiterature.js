import React from "react";

import SubLiter from "./SubLiter";
import Swiper from 'react-native-swiper';

const ExLiterature = ({navigation, route}) => {
  const id = route.params.id;
  const title = route.params.title;
  const text = route.params.text;
  
  var textArr = [];
  var cnt=0, last=-1;
  var i;

  for(i=0 ; i<text.length; i++){
    if(text[i]=='\n') { // \n을 만났을 때
      cnt++; 
      if(cnt%5==0 && cnt!=0){ // 5단위로 끊어서 배열 저장
        textArr.push(text.substring(last+1, i));
        last = i; // i까지 저장했음을 알려줌
        cnt=0;
      }
    }
  }

  if(cnt>0) textArr.push(text.substring(last+1, i));

  return (
    <Swiper showsButtons loop={false}>
      {textArr.map(s=>(
        <SubLiter 
        navigation={navigation} 
        id={id}
        setTitle={title}
        text={s}
        />
      ))}
    </Swiper>
  );
};

export default ExLiterature;