import { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyARlz-DBMAwd6sWSLPHsLr3ZuFeOpJsme8",
  authDomain: "class-scheduler-133e3.firebaseapp.com",
  databaseURL: "https://class-scheduler-133e3-default-rtdb.firebaseio.com",
  projectId: "class-scheduler-133e3",
  storageBucket: "class-scheduler-133e3.firebasestorage.app",
  messagingSenderId: "787430368518",
  appId: "1:787430368518:web:d283c49ece849589656a87"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path: string): [unknown, boolean, Error | undefined] => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error>();

  useEffect(() => {
    setData(undefined);
    setLoading(true);
    setError(undefined);
    return onValue(ref(database, path), (snapshot) => {
        setData(snapshot.val());
        setLoading(false);
      }, (error) => {
        setError(error);
        setLoading(false);
      }
    );
  }, [path]);

  return [data, loading, error];
};

export const setData = (path: string, value: any) => {
  return set(ref(database, path), value);
};
