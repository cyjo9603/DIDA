import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {getLoaclData} from '../reducers/user/getLocalData';
import {userInfoCheckRequest} from '../reducers/user/userInfo';
import {setIsConnected} from '../reducers/user/setIsConnected';

import {USER_KEY, PARTNER_KEY} from '../storageKey';

const Splash = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (async function() {
      try {
        const userCode = await AsyncStorage.getItem(USER_KEY);
        const partnerCode = await AsyncStorage.getItem(PARTNER_KEY);
        if (userCode || partnerCode) {
          console.log('true');
          console.log(userCode);
          const data = {
            userCode: userCode,
            partnerCode: partnerCode,
          };
          dispatch(getLoaclData(data));
          partnerCode ? dispatch(setIsConnected(true)) : dispatch(setIsConnected(false));
        } else {
          console.log('null');
          dispatch(setIsConnected(false));
        }
      } catch (e) {
        console.log('false');
      }
    })();
  }, []);

  return <></>;
};

export default Splash;
