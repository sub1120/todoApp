import { Client, Account, ID } from "appwrite";

export const getAccount = () => {
  try {
    const client = new Client()
      .setEndpoint(
        "https://8080-appwrite-integrationfor-5909t3u9vwa.ws-us79.gitpod.io/v1"
      )
      .setProject("63899ef6418947ff2d89");

    const account = new Account(client);

    return account;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const getUser = async () => {
  const account = getAccount();

  try {
    const user = await account.get();

    return user;
  } catch (error) {
    console.log(error);
  }

  return null;
};

export const createAccount = async (email, password, username) => {
  const account = getAccount();

  try {
    await account.create(ID.unique(), email, password, username);
  } catch (error) {
    console.log(error);
  }
};

export const createSession = async (email, password) => {
  const account = getAccount();

  try {
    await account.createEmailSession(email, password);
  } catch (error) {
    console.log(error);
  }
};

export const deleteSession = async () => {
  const account = getAccount();
  await account.deleteSession("current");
};
