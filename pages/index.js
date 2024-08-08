import MeetupList from "../components/meetups/MeetupList";



const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'A first meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941_%28cropped%29.jpg/800px-%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941_%28cropped%29.jpg',
        description: 'Our first meetup will be in Barcelona, Spain'
    },
    {
        id: 'm2',
        title: 'A second meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Le_casino_de_Monte-Carlo.JPG/1024px-Le_casino_de_Monte-Carlo.JPG',
        description: 'Our first meetup will be in Monaco'
    },
    {
        id: 'm3',
        title: 'A third meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/1024px-Cidade_Maravilhosa.jpg',
        description: 'Our first meetup will be in Rio de Janeiro, Brazil'
    },
    {
        id: 'm4',
        title: 'A fourth meetup',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Palace_Bridge_SPB_%28img2%29.jpg/1024px-Palace_Bridge_SPB_%28img2%29.jpg',
        description: 'Our first meetup will be in Saint Petersburg, Russia'
    },
]



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
        <>
            <MeetupList meetups={props.meetups} />
        </>
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




// by default next js generates the pages statically but if you need to wait for data you can do so by exporting a special function 
export async function getStaticProps() {
    // the code here never ends up on the client side because it is executed in the build 
    //you can fetch and read data here 
    // you always return an obj here 
    return {
        props: {
            meetups: DUMMY_MEETUPS
        },
        // if the data changes frequently we add the following to revalidate the data after every specified timeframe
        revalidate: 2
    }
}


export default HomePage;