import { createContext, useEffect, useState } from "react";
import { account } from "../lib/appwrite";
import { ID } from "react-native-appwrite";

interface User {
  email: string;
}

type UserContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  Register: (email: string, password: string) => Promise<void>;
  Logout: () => void;
  AuthChecked: boolean;
};

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [AuthChecked, setAuthChecked] = useState<boolean>(false);
  // Login function
  async function login(email: string, password: string) {
    try {
      await account.createEmailPasswordSession(email, password);
      const response = await account.get();

      // Map Appwrite user to your User interface
      setUser({ email: response.email });

      console.log("Logged in user:", response.email);
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  // Register function
  async function Register(email: string, password: string) {
    try {
      await account.create(ID.unique(), email, password);
      await login(email, password); // Automatically log in after register
    } catch (error: any) {
      throw Error(error.message);
    }
  }

  // Logout function
  async function Logout() {
    await account.deleteSession("current");
    setUser(null);
    // Optionally delete session via Appwrite here
  }

  async function getIntialUser() {
    try {
      const response = await account.get();
      setUser(response);
    } catch (error: any) {
      throw Error(error.message);
    } finally {
      setAuthChecked(true);
    }
  }

  useEffect(() => {
    getIntialUser();
  }, []);

  return (
    <UserContext.Provider
      value={{ user, login, Register, Logout, AuthChecked }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
