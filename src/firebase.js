
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';


const firebaseConfig = {
    apiKey: "AIzaSyDg6GBlH1b_3zBkVd2H-ygcb1Vv1RGpyuI",
    authDomain: "netflix-clone-60757.firebaseapp.com",
    projectId: "netflix-clone-60757",
    storageBucket: "netflix-clone-60757.appspot.com",
    messagingSenderId: "851734314077",
    appId: "1:851734314077:web:faeae59d3dac9c8d1c61b4"
  };


  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  export {firebaseApp}
  export default db; 