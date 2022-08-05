import { MongoClient } from 'mongodb';

async function connectToDB() {
  return await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@api-db.ofcj2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
}


async function getCollections(collectionName) {
  // const client = await connectToDB();
  const db = client.db();
  const collections = db.collections(collectionName);
  console.log(collections);
  client.close();
  // return collections;
}

export default connectToDB;