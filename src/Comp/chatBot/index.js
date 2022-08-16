import React, {useEffect, useState} from 'react';
import axios from "axios";
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ChatBot = () => {
    const [visible, setVisible] = useState(false);
    const [usrText, setUsrText] = useState("");
    const [message, setMessage] = useState([]);
    const [Response, setResponse] = useState();

    useEffect(() => {

    }, []);


    useEffect(() => {
        setMessage([...message, Response])
    }, [Response]);

    useEffect(() => {
        console.log(message)
    }, [message]);


    const showModal = () => {
        setVisible(!visible);
    };
    const onSendButton = (event) => {

        axios.post('http://127.0.0.1:5000/predict', {message: usrText})
            .then(response => {
                const data = {from: 'bot', msg: response.data.answer}
                //console.log(data)
                const msg1 = {from: 'us', msg: usrText}
                if (message.length===1){
                    setMessage([ msg1])
                }else {
                    setMessage([...message, msg1])
                }

                setResponse( data)
                //console.log(Response)
            });
        //event.preventDefault()
        //console.log(usrText)

        setUsrText("")
    }

    return (
        <div className="chatbox">
            {visible ?
                <div className="chatbox__support">

                    <div className="chatbox__header">
                        <div className="chatbox__image--header">
                            <img
                                src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png"
                                alt="image"/>
                        </div>
                        <div className="chatbox__content--header">
                            <h4 className="chatbox__heading--header">Chat support</h4>
                            <p className="chatbox__description--header">How can I help
                                you?</p>
                        </div>
                    </div>
                    <div className="chatbox__messages">
                        <div>
                            {

                                message?.map((msg,index)=>{
                                    if (msg?.from==='us'){
                                        return <div key={index} className="messages__item messages__item--operator">{msg?.msg}</div>
                                    }else  if (msg?.from==='bot'){
                                        return <div key={index} className="messages__item messages__item--visitor">{msg?.msg}</div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div className="chatbox__footer">
                        <input value={usrText} onChange={e => setUsrText(e.target.value)} id={"sendMsg"}
                               type="text"
                               placeholder="Write a message..."/>
                        <button onClick={() => onSendButton(usrText)}
                                className="chatbox__send--footer send__button">Send
                        </button>
                    </div>
                </div>
                : ""}
            <div className="chatbox__button">

                <button onClick={showModal}><FontAwesomeIcon icon="comments" size={"lg"}/></button>
            </div>

        </div>
    );
};

export default ChatBot;
