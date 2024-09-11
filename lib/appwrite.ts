import * as sdk from 'node-appwrite';

const client = new sdk.Client();

export const ENDPOINT = process.env.APPWRITE_ENDPOINT;
export const PROJECT_ID = process.env.APPWRITE_PROJECT_ID;
export const API_KEY = process.env.APPWRITE_API_KEY;

export const DATABASE_ID = process.env.APPWRITE_DATABASE_ID;
export const PATIENT_COLLECTION_ID = process.env.APPWRITE_PATIENT_COLLECTION_ID;
export const APPOINTMENT_COLLECTION_ID =
  process.env.APPWRITE_APPOINTMENT_COLLECTION_ID;
export const BUCKET_ID = process.env.APPWRITE_BUCKET_ID;

client.setEndpoint(ENDPOINT!).setProject(PROJECT_ID!).setKey(API_KEY!);

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const functions = new sdk.Functions(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);
