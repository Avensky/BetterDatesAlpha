import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { init } from "./utility/local-database";
import * as SplashScreen from 'expo-splash-screen';
import Navigator from './components/Navigator/Navigator';

export default function App() {

  // set local database constants
  const [dbInitialized, setDbInitialized] = useState(false);

  // local database
  useEffect(()=>{
    init()
      .then(()=> {
        console.log('sql db started successfully');
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log('sql db failed to start');
        console.log(err);
      })
  },[])

  useEffect(() => {
    setTimeout(async () => {
      if (Platform.OS == 'ios') {
        //await RNBootSplash.hide();
      } else {
        await SplashScreen.hideAsync();
      }
     }, 1000);
 
  }, []);

  if (!dbInitialized) { return null };
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
    );
};