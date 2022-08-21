// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyA_Dq109W38TTuzvUYu5t5HaeqsB_NSCT0',
	authDomain: 'instagram-clone-71e75.firebaseapp.com',
	projectId: 'instagram-clone-71e75',
	storageBucket: 'instagram-clone-71e75.appspot.com',
	messagingSenderId: '181431219935',
	appId: '1:181431219935:web:312240c8f1899cc0f21b6a',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
