import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, onValue, ref, set, update } from 'firebase/database';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type NextOrObserver, type User } from 'firebase/auth';

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
const auth = getAuth(firebase);

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

export const updateData = (path: string, value: any) => {
  return update(ref(database, path), value);
};

// Authentication
export const signInWithGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(auth);

export { firebaseSignOut as signOut };

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isInitialLoading: boolean;
}

export const addAuthStateListener = (fn: NextOrObserver<User>) => (
  onAuthStateChanged(auth, fn)
);

export const useAuthState = (): AuthState => {
  const [user, setUser] = useState(auth.currentUser);
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const isAuthenticated = !!user;

  useEffect(() => addAuthStateListener((user) => {
      flushSync(() => {
        setUser(user);
        setIsInitialLoading(false);
      })
    }), [])

  return { user, isAuthenticated, isInitialLoading };
};
