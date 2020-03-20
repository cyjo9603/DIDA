import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {getLocalDataRequest} from '../reducers/user/getLocalData';

import {USER_KEY} from '../storageKey';

const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function() {
      try {
        const userCode = await AsyncStorage.getItem(USER_KEY);
        dispatch(getLocalDataRequest(userCode));
      } catch (e) {
        console.log('false');
      }
    })();
  }, []);

  return <></>;
};

export default Splash;
