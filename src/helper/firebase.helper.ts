import { ILogin, IRegister, IUser } from "@src/common/interface";
import { db, fbAuth } from "@src/config/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export const getUserName = async (userEmail: string) => {
  let name = "";
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("email", "==", userEmail));
  (await getDocs(q)).forEach((doc) => {
    const userFromDB = doc.data() as IUser;
    name = userFromDB.name;
  });
  return name;
};
export const setNewUserToDB = async ({ email, password, name }: IRegister) => {
  await addDoc(collection(db, "users"), {
    email,
    name,
    password,
  });
};
export const signIn = async ({ email, password }: ILogin): Promise<IUser> => {
  const response = await signInWithEmailAndPassword(fbAuth, email, password);
  const { uid } = response.user;
  const currentUser = {
    name: "",
    email,
    uid,
  };
  currentUser.name = await getUserName(email);
  return currentUser;
};
export const signUp = async ({
  email,
  password,
  name,
}: IRegister): Promise<IUser> => {
  const response = await createUserWithEmailAndPassword(
    fbAuth,
    email,
    password,
  );
  await setNewUserToDB({ email, name, password });
  const { uid } = response.user;
  return {
    email,
    uid,
    name,
  };
};
export const logout = async () => {
  await signOut(fbAuth);
};
