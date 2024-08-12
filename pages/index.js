import { ApiError } from "next/dist/server/api-utils";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";



function HomePage(props) {

    // const [loaderMeetups, setLoadedMeetups] = useState([]);

    // // useeffect hook executes after the component renders which happens on the nexrt cycle 
    // //NextJS returns the html of first rendered page which is not good for the SEO 
    // //so, we have to use other options like (Page Pre-Rendering)
    // useEffect(() => {
    //     // here we sent the http request to send the data 
    //     setLoadedMeetups(DUMMY_MEETUPS);
    // }, [])


    return (
        <Fragment>
            <Head>
                <title>Next Meetups</title>
                <meta name="description" content="browse a list of the meetups"></meta>
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

// // this can be used to revalidate the data on the server side everytime there is a change 
// // use this method if data changes multiple times every second 
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;


//     //fetch data from the API

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS
//         }
//     }
//     // you cannot set revalidate because there's no need 
// }




// by default next js generates the pages statically but if you need
// to wait for data you can do so by exporting a special function 
export async function getStaticProps() {

    // here we fetch the data from the Api
    // Uo90nWzMpoicRTeG 
    const client = await MongoClient.connect(
        'mongodb+srv://user_1:Uo90nWzMpoicRTeG@meetupnext0.xpkke.mongodb.net/meetups?retryWrites=true&w=majority&appName=MeetupNext0'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();


    // the code here never ends up on the client side because it is executed in the build 
    //you can fetch and read data here 
    // you always return an obj here 
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        // if the data changes frequently we add the following to revalidate the data after every specified timeframe
        revalidate: 10
    }
}


export default HomePage;