import {useContext} from "react";
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {Button} from "@mui/material";

import css from './Header.module.css';
import {Context} from "../../index";

const Header = () => {
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    return (
        <div className={css.Header}>
            {
                user
                    ? <Link to={'/chat'} className={css.logoLink}>ChatWithMe</Link>
                    : <Link to={''} className={css.logoLink}>ChatWithMe</Link>

            }
            <Link to={'/chat'}><Button variant={"outlined"}>Chat</Button></Link>
            {
                user
                    ? <Button onClick={() => {
                        auth.signOut();
                        navigate('/login');
                    }} variant={"outlined"}>Logout</Button>
                    : <NavLink to={'/login'}><Button variant={"outlined"}>Login</Button></NavLink>

            }
            {
                user
                    ? ''
                    : <Link to={'/register'}><Button variant={"outlined"}>Register</Button></Link>

            }
        </div>
    );
};

export {Header};
