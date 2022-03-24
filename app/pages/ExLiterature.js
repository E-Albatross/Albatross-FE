import React from "react";

import SubLiter from "./SubLiter";
import Swiper from 'react-native-swiper';

const ExLiteratureNew = ({navigation, route}) => {
  const id = route.params.id;
  const text = route.params.text;

  return (
    <Swiper showsButtons loop={false}>
      <SubLiter navigation={navigation} text={text} id={id}/> 
      <SubLiter navigation={navigation} text={text} id={id}/> 
      <SubLiter navigation={navigation} text={text} id={id}/> 
    </Swiper>
  );
};

export default ExLiteratureNew;