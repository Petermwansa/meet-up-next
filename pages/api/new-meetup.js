// /api/new-meetup
import { MongoClient } from "mongodb";



async function handler(req, res) {
    // only post reqs would trigger this code 
    if (req.method === "POST") {
        const data = req.body;

        const client = await MongoClient.connect('mongodb+srv://mwansapeter:#Apples123mongodb@meetupnext0.xpkke.mongodb.net/meetups?retryWrites=true&w=majority&appName=MeetupNext0');
        const db = client.db();

        const meetupCollection = db.collection('meetups');
        const result = await meetupCollection.insertOne(data);

        console.log(result);
        
    }
}


export default handler;