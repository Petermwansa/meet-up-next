// /api/new-meetup
import { MongoClient } from "mongodb";


async function handler(req, res) {
    // only post reqs would trigger this code 
    if (req.method === "POST") {
        const data = req.body;

        
        const client = await MongoClient.connect('mongodb+srv://user_1:Uo90nWzMpoicRTeG@meetupnext0.xpkke.mongodb.net/meetups?retryWrites=true&w=majority&appName=MeetupNext0');
        const db = client.db();


        // Uo90nWzMpoicRTeG 

        const meetupsCollection = db.collection('meetups');
        const result = await meetupsCollection.insertOne(data);

        console.log(result);

        client.close();
        
        res.status(201).json({message: "meetup inserted!" });
    }
}

export default handler;