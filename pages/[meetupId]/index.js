import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import { Fragment } from "react";

function MeetupDetails(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description}></meta>
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />       
        </Fragment>
    )
}


// id describes the dynamic segment values for which the page should be regenerated
export async function getStaticPaths() {

    // here we fetch the data from the Api
    // Uo90nWzMpoicRTeG 
    const client = await MongoClient.connect(
        'mongodb+srv://user_1:Uo90nWzMpoicRTeG@meetupnext0.xpkke.mongodb.net/meetups?retryWrites=true&w=majority&appName=MeetupNext0'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray()

    client.close();


    return {

        fallback: 'blocking',
        paths: meetups.map(meetup => ({ 
            params: { 
                meetupId: meetup._id.toString()
            }}))
    }
    
}

export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;


    const client = await MongoClient.connect(
        'mongodb+srv://user_1:Uo90nWzMpoicRTeG@meetupnext0.xpkke.mongodb.net/meetups?retryWrites=true&w=majority&appName=MeetupNext0'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    })

    client.close();


    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description
            }
        }
    }
}


export default MeetupDetails;





