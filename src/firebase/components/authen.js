import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, sendEmailVerification  } from 'firebase/auth';
import { takeUser } from "./firestore";
import { async } from "@firebase/util";

export const Regis = async(data) => {
  const genarate = await createUserWithEmailAndPassword(auth, data.Email, data.Password)
  .then(async(res) => {
    const result = await takeUser(data, res.user.uid)
    const sendmail = await sendEmailVerification(auth.currentUser)
    alert('Email Verification sent! Check your mail box');
    return res.user
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        return {error:errorMessage, status:false}
      });
}

export const SingIn = async(Email, Password) => {
  const result = await signInWithEmailAndPassword(auth, Email, Password)
  .then((userCredential) => {
    const user = userCredential.user;
    return user
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return result.uid
}

export const SendEmail = async(email) =>{
  const result = await sendPasswordResetEmail(auth, email)
  .then(() => {
    alert('Email Resetpassword sent! Check your mail box');
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });
}
export default {Regis, SingIn, SendEmail};