import axios from "axios";
import { useState, createContext, useEffect } from "react";

export const authContext = createContext();

const AuthState = ({ children }) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    const [processing, setProcessing] = useState(true);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const token = localStorage.getItem('token');
    const [verified, setVerified] = useState(null);
    useEffect(() => {
        if (token) {
            const verifyHandler = async () => {
                try {
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
                            setUserId(res.data.userId);
                            setVerified(true);
                            axios
                                .get(`${apiUrl}/users/${res.data.userId}`)
                                .then(res => {
                                    setUser(res.data)
                                    setProcessing(false);
                                })
                                .catch();
                        })
                        .catch(err => {
                            setVerified(false);
                            setProcessing(false);
                        });
                } catch (error) {
                    console.log(error);
                }
            }
            verifyHandler();
        } else {
            setProcessing(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiUrl]);

    if (!processing) {
        return (
            <authContext.Provider value={{ setVerified, verified, setUserId, userId, user }}>
                {children}
            </authContext.Provider>
        );
    }
};

export default AuthState;