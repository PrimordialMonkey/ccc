import { db } from "../firebase";
import { collection, addDoc, doc, getDoc, getDocs, setDoc, where, query, collectionGroup } from "firebase/firestore"; 
import { async } from "@firebase/util";

export const takeUser = async(data, uid) => {
    try {
      console.log(data)
      const docRef = await addDoc(collection(db, "User"), {
        Name: data.Name,
        LastName: data.LastName,
        PhoneNumber: data.PhoneNumber,
        CarModel: data.CarModel,
        CarNumber: data.CarNumber,
        UID: uid
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
}

export const getUser = async(uid)=>{
  try{
    const docSnap = await getDocs(query(collection(db, "User"), where("UID", "==", uid)))
    let arraikaodai
    const result = docSnap .forEach(element => {
      arraikaodai = element.data()
    });
      return arraikaodai
    } catch (error) {
      console.log(error)
    }
}

export default {takeUser, getUser}