import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  getDocs,
  getDoc, 
  addDoc, 
  deleteDoc, 
  doc, 
  updateDoc, 
  onSnapshot
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBY5j_yVpRs_8TToeyM0VTOq7ev8VVODuE",
  authDomain: "habits-44470.firebaseapp.com",
  projectId: "habits-44470",
  storageBucket: "habits-44470.firebasestorage.app",
  messagingSenderId: "816810897544",
  appId: "1:816810897544:web:09973dd7c965a55b342f3d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const habitsCollection = collection(db, "habits");

export const fetchHabits = async () => {
  const habitsSnapshot = await getDocs(habitsCollection);
  return habitsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};


export const addHabit = async (newHabit) => {
  try {
    const docRef = await addDoc(habitsCollection, newHabit);
    return docRef.id;
  } catch (error) {
    console.error("Error adding habit:", error);
    throw error;
  }
};

export const deleteHabit = async (habitId) => {
  const habitDoc = doc(db, "habits", habitId);
  await deleteDoc(habitDoc);
};

export const updateHabit = async (habitId, updatedHabit) => {
  const habitRef = doc(db, "habits", habitId);
  await updateDoc(habitRef, updatedHabit);
};

export const listenToHabitsFromFirebase = (callback) => {
  const habitsCollection = collection(db, "habits");
  const unsubscribe = onSnapshot(
    habitsCollection,
    (snapshot) => {
      const habits = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      callback(habits);
    },
    (error) => {
      console.error("Error listening to habits:", error);
    }
  );
  return unsubscribe;
};

