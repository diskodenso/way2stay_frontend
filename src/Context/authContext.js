import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const authContext = createContext();

const AuthState = ({ children }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [processing, setProcessing] = useState(true);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const token = localStorage.getItem('token');
    // const [token, setToken] = useState(localStorage.getItem('token'));
    const [verified, setVerified] = useState(null);
    useEffect(() => {
        if (token) {
            const verifyHandler = async () => {
                await axios
                    .get(`${apiUrl}/users/verify`,
                        {
                            headers:
                            {
                                'token': token
                            }
                        }
                    )
                    .then(res => {
                        console.log(res.data);
                        setUserId(res.data.userId);
                        setVerified(true);
                        setProcessing(false);
                    })
                    .catch(err => {
                        setVerified(false);
                        setProcessing(false);
                    });
            }
            verifyHandler();
        } else {
            setProcessing(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiUrl]);

    if (!processing) {
        return (
            <authContext.Provider value={{ setVerified, verified, setUserId, userId }}>
                {children}
            </authContext.Provider>
        );
    }
};

export default AuthState;