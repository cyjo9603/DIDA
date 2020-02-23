import React, {FunctionComponent} from 'react';
import {TouchableOpacity, Image} from 'react-native';

const HeartSelect: FunctionComponent<{index: 1 | 2 | 3 | 4 | 5}> = ({
  index,
}) => {
  return (
    <TouchableOpacity>
      <Image
        source={require(`../../image/drawable-xxxhdpi/ic_heart_2_off.png`)}
        style={{width: 56, height: 56}}
      />
    </TouchableOpacity>
  );
};

export default HeartSelect;
