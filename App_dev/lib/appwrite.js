import { Client, Avatars, Account } from "react-native-appwrite";

export const client = new Client();
client
  .setEndpoint("https://nyc.cloud.appwrite.io/v1")
  .setProject("69809675003694619d54") // Replace with your project ID
  .setPlatform("dev.shucayb.BookStore");

export const account = new Account(client);
export const avatar = new Avatars(client);
