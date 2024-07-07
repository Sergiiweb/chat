import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {initializeApp} from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const app = initializeApp({
    apiKey: "AIzaSyBL6-IlyU7ULtYH4TN_GjjFZrxDdimKOcE",
    authDomain: "simple-chat-fd1b8.firebaseapp.com",
    projectId: "simple-chat-fd1b8",
    storageBucket: "simple-chat-fd1b8.appspot.com",
    messagingSenderId: "666892044730",
    appId: "1:666892044730:web:6650132d3283003aa3b583"
});

export const Context = createContext(null);

const auth = getAuth();
const firestore = getFirestore();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Context.Provider value={{
        auth,
        firestore
    }}>
        <RouterProvider router={router}/>
    </Context.Provider>
);

