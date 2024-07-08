import {useContext, useState} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {Avatar, Button, Container, dividerClasses, Grid, TextField} from "@mui/material";
import {doc, setDoc, Timestamp, collection, query, orderBy, addDoc} from "firebase/firestore";

import {Context} from "../../index";
import Loader from "../LoaderComponent/Loader";

const ChatComponent = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);
    const [message, setMessage] = useState('');
    const [messages, loading, errors] = useCollectionData(
        query(
            collection(firestore, 'messages'),
            orderBy('createdAt')
        ));
    console.log(messages);
    if (loading) {
        return <Loader/>
    }

    const sendMessage = async () => {
        const data = {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: message,
            createdAt: new Date(),
        };
        await addDoc(collection(firestore, "messages"), data);
        setMessage('');
    }

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 70, marginTop: 5}}
                justifyContent={"center"}
            >
                <div style={{width: '80%', height: '65vh', border: '1px solid lightgray', overflowY: 'auto'}}>
                    {messages.map(message =>
                        <div>
                            <Grid
                                container
                            >
                                <Avatar src={message.photoURL}/>
                                <div>{message.displayName}</div>
                            </Grid>
                            <div>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    width={'80%'}
                >
                    <TextField
                        variant={"outlined"}
                        fullWidth
                        maxRows={2}
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <Button onClick={sendMessage} variant={"outlined"}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ChatComponent;
