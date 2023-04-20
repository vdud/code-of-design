import { MongoClient } from 'mongodb';

const client = new MongoClient(import.meta.env.VITE_MONGO_URL);

export function startMongo(): Promise<MongoClient> {
	// console.log('Connecting to MongoDB...');
	return client.connect();
}

export default client.db();
