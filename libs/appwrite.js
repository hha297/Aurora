import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

export const appwriteConfig = {
        endpoint: 'https://cloud.appwrite.io/v1',
        platform: 'com.hha297.aora',
        projectId: '67179448003bcccb0950',
        databaseId: '671795bb000da07b789d',
        userCollectionId: '671795cf0036e907f006',
        videoCollectionId: '671795e600335b570285',
        storageId: '671796e200153325bbef',
};

const client = new Client();

client.setEndpoint(appwriteConfig.endpoint).setProject(appwriteConfig.projectId).setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);
export const createUser = async (email, password, username) => {
        try {
                const newAccount = await account.create(ID.unique(), email, password, username);
                if (!newAccount) throw Error;

                const avatarUrl = avatars.getInitials(username);
                await signIn(email, password);

                const newUser = await databases.createDocument(appwriteConfig.databaseId, appwriteConfig.userCollectionId, ID.unique(), {
                        accountId: newAccount.$id,
                        email,
                        username,
                        avatar: avatarUrl,
                });

                return newUser;
        } catch (error) {
                console.log(error);
                throw new Error(error);
        }
};

export const signIn = async (email, password) => {
        try {
                const session = await account.createEmailPasswordSession(email, password);
        } catch (error) {
                console.log(error);
                throw new Error(error);
        }
};

export const getCurrentUser = async () => {
        try {
                const currentAccount = await account.get();
                if (!currentAccount) throw Error;

                const currentUser = await databases.listDocuments(appwriteConfig.databaseId, appwriteConfig.userCollectionId, [Query.equal('accountId', currentAccount.$id)]);

                if (!currentUser) throw Error;

                return currentUser.documents[0];
        } catch (error) {
                console.log(error);
                throw new Error(error);
        }
};