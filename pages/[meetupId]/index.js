import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
    return (
        <MeetupDetail
            image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941_%28cropped%29.jpg/800px-%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941_%28cropped%29.jpg"
            title="A first meetup"
            address="Barcelona, Spain"
            description="The first meetup in Barcelona"
        />
    )
}

// id describes the dynamic segment values for which the page should be regenerated
export async function getStaticPaths() {
    return {
        fallback: false,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                },
            },
            {
                params: {
                    meetupId: 'm2',
                },
            },
        ]
    }
}

export async function getStaticProps(context) {
    //fetch data for a single meetup

    const meetupId = context.params.meetupId;
    console.log(meetupId);


    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941_%28cropped%29.jpg/800px-%CE%A3%CE%B1%CE%B3%CF%81%CE%AC%CE%B4%CE%B1_%CE%A6%CE%B1%CE%BC%CE%AF%CE%BB%CE%B9%CE%B1_2941_%28cropped%29.jpg",               id: meetupId,
                title: "A first meetup",
                address: "Barcelona, Spain",
                description: "The first meetup in Barcelona",           
            }
        }
    }
}


export default MeetupDetails;