import {useContext} from "react";
import {useForm} from "react-hook-form";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {Box, Button, Container, Grid} from "@mui/material";

import {IAuth} from "../interfaces/authInterface";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";


const LoginPage = () => {
    const {auth} = useContext(Context);
    const navigate = useNavigate();

    const {register, handleSubmit, reset} = useForm<IAuth>();

    const login = () => {

    }
    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const {user} = await signInWithPopup(auth, provider);
        navigate('/chat');
    }

    return (
        <div>
            <form onSubmit={handleSubmit(login)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
            <Container>
                <Grid
                    container
                    style={{height: window.innerHeight - 100}}
                    alignItems={"center"}
                    justifyContent={"center"}
                >
                    <Grid style={{width: 400, background: 'lightgrey'}}
                          container
                          alignItems={"center"}
                          direction={"column"}
                    >
                        <Box p={5}>
                            <Button onClick={loginWithGoogle} variant={"outlined"}>Login with Google</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default LoginPage;
