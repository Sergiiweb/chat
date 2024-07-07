import {Link, NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useAuthState} from "react-firebase-hooks/auth";
import {useContext} from "react";
import {Context} from "../../index";
import {Button} from "@mui/material";

const Header = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    return (
        <div className={css.Header}>
            <Link to={''} className={css.logoLink}>ChatWithMe</Link>
            <Link to={'/chat'}>Chat</Link>
            {
                user
                    ? <Button onClick={() => auth.signOut()}>Logout</Button>
                    : <NavLink to={'/login'}><Button>Login</Button></NavLink>

            }
            <Link to={'/register'}>Register</Link>
        </div>
    );
};

export {Header};
