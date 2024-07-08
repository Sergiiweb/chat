import {useContext} from "react";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button, Container, Grid, TextField} from "@mui/material";

import {Context} from "../../index";

const ChatComponent = () => {
    const {auth, firestore} = useContext(Context);
    const [user] = useAuthState(auth);

    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 100}}
                justifyContent={"center"}
            >
                <div style={{width: '80%', height: '70vh', border: '1px solid lightgray', overflowY: 'auto'}}>
                </div>
                <Grid
                    container
                    direction={"column"}
                    alignItems={"flex-end"}
                    width={'80%'}
                >
                    <TextField variant={"outlined"}/>
                    <Button variant={"outlined"}>Send</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ChatComponent;
