import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import { useLottie } from "lottie-react";
import workFromHome from "./workFromHome.json"
import VTAS from "./VTAS.json"
import Goupendo from "./Goupendo.json"
import Doctor from "./doctor.json"
import Goal from "./Goal.json"
import { keys } from '@material-ui/core/styles/createBreakpoints';

function CarouselK(props) {
    var items = [
        {
            name: <h4 style={{ paddinTop: '10px', textDecoration: 'underline' }}>VTAS (Video Tracking and Surveillance System)</h4>,
            description: <div style={{ padding: '40px' }}><span>Probably the most Challenging and amazing Project I'have led by far from scratch to deployment .I led and implemented the backbone as well as the look and feel of the admin portal of the application.</span><h6>The project was delivered successfully and is live across India with more than 10,000 ATMs on the secure channel of VTAS surveillance. The system uses technologies such as Kafka, socket programming in Node, Apache Ignite, RabbitMQ, React (Admin panel), Shell programming, Spark Streaming and more. The project involved working with the engineering of security devices such as DVR’s, security cameras, intrusion panels, this proved challenging but resulted in excellent outcomes. Performance testing was completed on JMeter and alert automation was planned to deliver a comprehensive and complex solution receiving great feedback. Following Agile Methodology and MVC framework, VTAS came out as a successful and it is a significant accomplishment I am proud of.</h6></div>,
            bgColor: '#2c2c54',
            color: 'white'

        },
        {
            name: <h4 style={{ paddingTop: '10px', textDecoration: 'underline' }}>Goupendo Portal/(Previously Named VendorTime)</h4>,
            description: <div style={{ padding: '40px' }}>A US based startup with funding of  USD5M, set up to support Vendors and Business Decision Makers with B2B sales and marketing opportunities. Eliminating cold calls, Vendors can add products or services to the platform allowing Decision Makers to connect and schedule meetings. Promoted to Lead Developer for this project and led the creation of the entire back-end for the innovative solution.  The solution required functionalities including video conferencing, calling, online payment gateway and diary management. The payment processing technology was implemented through Stripe. Unit tests were written using Mocha, while Design Architecture used MVC (model view controller). Core Technologies used were  • Node ,Express & GraphQL,SQL Server 2012,Stripe,Twilio, Sendgrid</div>,
            bgColor: '#596275',
            color: 'white'
        },
        {
            name: <h4 style={{ paddingTop: '10px', textDecoration: 'underline' }}>Uptake Medical</h4>,
            description: <div style={{ padding: '40px' }}>Uptake Medical WebApplication ,structured the FrontEnd in React from the contemporary Dashboard to modules such as email templates , uploading of MRI Scans /Viewing MRI Scans & User management platform as well. </div>,
            bgColor: '#218c74',
            color: 'white'
        },
        {
            name: <h4 style={{ paddingTop: '10px', textDecoration: 'underline' }}>Goal Plan System</h4>,
            description: <div style={{ padding: '40px', textAlign: 'left' }}>This was a highly effective solution for personal and professional task management. The end users are likely to be businesses who can benefit from efficient task management solutions for their employees. I contributed significantly to the solution as Full Stack Engineer using technologies such as Node and React. Some of the modules I worked on included
                <ul style={{ textAlign: 'left', listStyle: 'circle outside' }}>
                    <li>Employee personal record</li>
                    <li>Task management </li>
                    <li>Projects assignment </li>
                    <li>Attendance management</li>
                    <li>Resume upload and management</li>
                    <li>Permission modules</li>
                </ul></div>,
            bgColor: '#474787',
            color: 'white'
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, index) => {
                    console.log(index);
                    return <ProjectCARD kindex={index} item={item} />
                })
            }
        </Carousel>
    )
}

function ProjectCARD({ kindex, item }) {
    console.log("---key", kindex)
    return (
        <Paper style={{ height: '80vh', background: item.bgColor, color: item.color }}>
            <h2 style={{ fontSize: '1.4em', fontWeight: '600' }}>{item.name}</h2>
            <p style={{ fontSize: '1em', fontWeight: '600' }}>{item.description}</p>
            <div style={{ marginTop: '-40px' }}></div>
            <ReactLottie keyIndex={kindex} />
        </Paper>
    )
}



const ReactLottie = ({ keyIndex }) => {
    console.log("---&KEY", keyIndex)
    const chooseJson = [VTAS, Goupendo, Doctor, Goal]
    const options = {
        animationData: chooseJson[keyIndex],
        loop: true,
        autoplay: true,
        style: {
            height: '60%' ,
            marginTop: 0
        },
        interactivity: {
            mode: "scroll",
            actions: [
                {
                    visibility: [0, 0.2],
                    type: "stop",
                    frames: [0],
                },
                {
                    visibility: [0.2, 0.45],
                    type: "seek",
                    frames: [0, 45],
                },
                {
                    visibility: [0.45, 1.0],
                    type: "loop",
                    frames: [45, 60],
                },
            ],
        }
    };

    const { View } = useLottie(options);

    return (<>{View}</>)

}

export default CarouselK