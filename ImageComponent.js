import React, {Fragment} from 'react';
import {
  Image
} from 'react-native';

const ImageComponent = (props) => {
  return (
    <Image
      style={{width: 120, height: 100}}
      source={{uri: props.source}}
    />
  );
};

export {ImageComponent};
