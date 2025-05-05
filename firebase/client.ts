// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyC0Bxaio6hvHiXnH2Yffuep1z6eEbcwIA4',
	authDomain: 'prepwise-fa92f.firebaseapp.com',
	projectId: 'prepwise-fa92f',
	storageBucket: 'prepwise-fa92f.firebasestorage.app',
	messagingSenderId: '339980414479',
	appId: '1:339980414479:web:c1d1ea165cfa201cf1bd7a',
	measurementId: 'G-02HYXWBFM8',
};

// Initialize Firebase
const app = !getApps().length
	? initializeApp(firebaseConfig)
	: getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
