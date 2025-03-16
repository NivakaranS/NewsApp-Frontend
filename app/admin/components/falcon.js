'use client'
import React, { useState } from 'react'
import './falcon.css'
import Image from 'next/image';
import Send from '../images/send.png'
import ReactPlayer from 'react-player';
import FalconLogo from '../images/falcon.png'
import { useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const Falcon = () => {
    const [falconClick, setFalconClick] = useState(false);
    const [messageSubmitted, setMessageSubmitted] = useState(false);
    const [senderMessage, setSenderMessage] = useState([]);
    const [receiverMessage, setReceiverMessage] = useState([])
    const [message, setMessage] = useState('');
    const [messageCollection, setMessageCollection] = useState([]);
    const scrollContainerRef = useRef(null);
    const [response, setResponse] = useState(null);
    const [typing, setTyping] = useState(true);
    const [sessionId, setSessionId] = useState(null);

    useEffect(() => {
        
        let storedSessionId = localStorage.getItem('sessionId');
        
        if (!storedSessionId) {
        
            storedSessionId = uuidv4();
            localStorage.setItem('sessionId', storedSessionId);
        }

        
        setSessionId(storedSessionId);
    }, []);
    


const fetchData = async () => {
    if (!sessionId || !message) return;

    console.log("Session ID:", sessionId);

    const payload = { session_id: sessionId, question: message };

    try {
        const response = await axios.post(
            "https://nivakaran-falconv2.hf.space/ask_question/",
            payload,
            {
                headers: { "Content-Type": "application/json" },
                timeout: 10000, // Timeout of 10 seconds
            }
        );

        console.log("API Response:", response.data);

        const answer = response.data?.answer || "No response received";

        setMessageCollection((prevMessages) => [
            ...prevMessages,
            { type: "receiver", content: answer, timestamp: Date.now() }
        ]);

        setTyping(false);

    } catch (error) {
        console.error("Error invoking API:", error.message);
        if (error.response) {
            console.error("Response Status:", error.response.status);
            console.error("Response Data:", error.response.data);
        } else {
            console.error("Network error: API may be down.");
        }
    }
};


      

    useEffect(() => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
        }
    }, [messageCollection]);

    const onMessageSubmit = (msg) => {
        if (msg.trim()) {
            fetchData();
            console.log("Message sent:", msg);
            
            setMessageSubmitted(true);
            setMessageCollection((prevMessages) => [...prevMessages, {type: 'sender', content: msg, timestamp: Date.now()}]);
            console.log(senderMessage)
            setTyping(true);
            setMessage('')
            
        }
        
    }

    const onRouteChange = () => {
        setFalconClick(!falconClick);
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault(); 
            onMessageSubmit(e.target.value);
        }
    };

    return (
        <div className='falconMainContainer'>
            
            <div className='falconInnerContainer2' style={{position: 'absolute', bottom: 0, right: 0, transition: 'transform 0.4s ease-in-out 0.2s', transitionDelay: falconClick? "0.2s": "0s", transformOrigin: 'bottom right', transform: falconClick==true? 'scale(1.0)': 'scale(0)'}}>
                <div style={{background: '#E5E5E5', width: '100%', height: 428, borderTopRightRadius: 15, borderTopLeftRadius: 15}}>
                    <div style={{display: 'flex', alignItems: 'center', padding: '0px 20px', justifyContent: 'space-between', background: 'linear-gradient(135deg, orange, #ffd503)', width: '100%',borderTopRightRadius: 14, borderTopLeftRadius: 14, height: 65, borderBottom: '0.5px solid grey', boxShadow: '0px 0px 5px -1px black'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
                            <div style={{height: 51, width: 51,  display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 6, borderRadius: 15}}>
                                <Image alt='test' src={FalconLogo} height={45}/>
                            </div>
                            <p style={{display: 'flex', flexDirection: 'column', marginTop: 5, lineHeight: 1.1}}>
                                <span style={{ color: 'white', fontSize: 15}}>Chat with</span>
                                <span style={{color: 'white', fontFamily: 'Arial',  fontSize: 25}}>Falcon</span>
                            </p>
                        </div>
                        <p onClick={onRouteChange} className='falconCloseBtn'>Close</p>
                    </div>
              

                        {messageSubmitted ?
                        <div className='secondFalconChatContainer'  ref={scrollContainerRef} >
                            <div style={{background: '#8f8f8f', fontSize: 13, padding: '4px 8px', borderRadius: 5, border: '1px solid grey', boxShadow: '0px 0px 5px -2px black'}}>
                                <p style={{color: '#303030'}}>Today</p>
                            </div>
                            {messageCollection
                            .sort((a, b) => a.timestamp - b.timestamp) // Sort messages by timestamp
                            .map((msg, index) => (
                                <div
                                    key={index}
                                    style={{
                                        fontSize: 14,
                                        border: msg.type === 'sender' ? '1px solid green' : '1px solid grey',
                                        alignSelf: msg.type === 'sender' ? 'flex-end' : 'flex-start',
                                        background: msg.type === 'sender' ? '#0dba14' : 'white',
                                        color: msg.type === 'sender' ? 'white' : 'black',
                                        padding: '7px 13px',
                                        borderRadius: '5px',
                                        maxWidth: '60%',
                                        margin: '14px 0px 0px 0px',
                                        boxShadow: '0px 0px 8px -3px black',
                                        textAlign: 'left',
                                        maxWidth: 270 
                                    }}
                                >
                                    {msg.content}
                                </div>
                            ))}
                            {typing==true?
                            <div style={{alignSelf: 'flex-start', background: 'grey', padding: '8px 15px', borderRadius: 5}}>
                                <p style={{color: 'white'}}>Typing..</p>
                            </div>: null}
                            
                        </div>
                        :
                        <div className='firstFalconChatContainer'>
                            <div style={{height: 80, width: 80, margin:'5px 0px', overflow: 'hidden'}}>
                                <ReactPlayer
                                    url="/videos/ai.mp4" // Relative URL path to the public folder
                                    width="100%"  // Adjust width
                                    height="100%" // Adjust height
                                    loop={true}
                                    playing={true}
                                    muted={true}
                                    style={{scale: 2.0}}
                                />
                            </div>
                            <p style={{margin: '10px 5px', fontSize: 15}}>Hello! I am Falcon, your AI-powered assistant for software solutions developed by Codebug. </p>
                            
                            <p style={{ fontSize: 15}}>I'm here to connect you with expert insights, guide you through our services, and answer all your queries about software development design, and technology solutions. Let's build something extraordinary together!</p>
                        </div>}
                        
                   
                </div>
                
                <div style={{background: '#bdbdbd', borderTop: '0.5px solid grey', boxShadow:'0px 0px 10px -3px black', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', height: 120, borderBottomRightRadius: 15, borderBottomLeftRadius: 15}}>
                    <div>
                        <textarea onKeyDown={handleKeyDown} onChange={(e)=>setMessage(e.target.value)} value={message} placeholder='Enter your message..' style={{ resize: 'none', fontFamily: 'Arial', fontSize: 15, borderRadius: 5, width: 380, padding: '8px 35px 5px 10px', height: 78, color: 'black', background: 'white', border: 'none', outline: '1px solid grey'}}/>
                        <div className='falconSendBtn' onClick={() =>onMessageSubmit(message)}>
                            <div style={{display: 'flex', flexDirection: 'row', position: 'relative', left: 2, top: 2, alignItems: 'center', justifyContent: 'center'}}>
                            <Image alt='test'  src={Send} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div style={{alignSelf: 'flex-end', padding: '2px 15px'}}>
                        <p style={{display: 'flex', fontSize: 12, flexDirection: 'row'}}>
                            Powered by
                            <span style={{marginLeft: 5,  color: 'blue'}}>Codebug Technologies</span>
                        </p>

                    </div>
                    
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.1s ease-in-out 0.4s', transitionDelay: falconClick? "0s": "0.4s", transform: falconClick==true? 'translateY(100px)': 'none'}} onClick={onRouteChange} className='falconInnerContainer1'>
                
                <p style={{zIndex: 99}}>Falcon</p>
            </div>
    
        </div>
    )
}


export default Falcon