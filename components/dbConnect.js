import { MongoClient } from 'mongodb';

async function connectToDB() {
  return await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@api-db.ofcj2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
}

export default connectToDB;