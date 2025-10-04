import React, { useContext } from 'react'
import styles from './Login.module.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import GoogleIcon from '@mui/icons-material/Google';
import {auth, provider} from '../../utils/firebase';
import { signInWithPopup } from 'firebase/auth';
import{AuthContext} from '../../utils/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    
    const {isLogin,setLogin, userInfo, setUserInfo} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = async() =>{
        try{  
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        const userData={
            name:user.displayName,
            email:user.email,
            photoUrl:user.photoURL
        }

        setLogin(true);
        setUserInfo(userData);
        localStorage.setItem("isLogin", true)
        localStorage.setItem("userInfo",JSON.stringify(userData))
        navigate('/dashboard');

        }catch(err){
            alert('something went wrong');
            console.log(errs);
        }

    }
    return (
        <div className={styles.Login}>
            <div className={styles.loginCard}>
                <div className={styles.loginCardTitle}>
                    <h1>Login</h1>
                    <VpnKeyIcon />
                </div>
                <div className={styles.googleBtn} onClick={handleLogin}><GoogleIcon sx={{ fontSize: 20, color: "red" }} />Sign in with Google</div>
            </div>
        </div>
    )
}

export default Login