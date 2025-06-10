import { Button, Form } from 'react-bootstrap';
import AdminImage from '../assets/admin.jpg'
import UserImg from '../assets/user.jpg'
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie'
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import axios from 'axios'
import Spinner from 'react-bootstrap/Spinner';
export default function LoginPage() {
    const [userData,setUserData] = useContext(UserContext)
    const [hasToken, setHasToken] = useState(false)
    const [loader, setLoader] = useState(false)
    const [apiError, setApiError] = useState('')
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})
    const handelFormData = (e) => {
        const { name, value } = e.currentTarget;
        setApiError('')
        console.log(name, value)
        setFormData({ ...formData, [name]: value })
    }

    const getUserDetails = () => {
        const config = {
            headers: {
                Authorization: `Bearer ${Cookies.get("userToken")}`
            }
        }
        axios.get('https://api.escuelajs.co/api/v1/auth/profile', config)
            .then(res => {
                console.log("response1111", res)
                setUserData(res.data)
                Cookies.set("userData", JSON.stringify(res.data))
                if (res.data.role === "admin") {
                    navigate("/admin-dashboard")
                }
                else {
                    navigate("/user-dashboard")
                }
            })
            .catch(err => {
                Cookies.remove("userToken");
                console.log("fetching error", err)
            })
    }
    const LoginProcess = (e) => {
        e.preventDefault();
        setApiError('')
        setLoader(true)
        axios.post('https://api.escuelajs.co/api/v1/auth/login', formData)
            .then(response => {
                console.log("response", response);
                Cookies.set("userToken", response.data.access_token);
                getUserDetails()
                setLoader(false)
            })
            .catch(err => {
                console.log(err.response)
                if (err.response.status === 401) {
                    setApiError(`${err.response.data.message} user`)
                }
                else {
                    setApiError(err.response.data.message)
                }
                setLoader(false)
            })
    }
    useEffect(() => {
        if (Cookies.get("userToken")) {
            setHasToken(true)
            // getUserDetails()
            let getRole = JSON.parse(Cookies.get("userData")).role;
            if (getRole === "admin") {
                navigate("/admin-dashboard")
            }
            else {
                navigate("/user-dashboard")
            }
        }

    }, [])
    return (
        <>
            {
                hasToken ?
                    <p>Redirecting to Dashboard</p>
                    :
                    <div className="login-wrap">
                        <div className="login-wrap-left pt-4">
                            <h1>Welcome to Bike Hook</h1>

                        </div>
                        <div className="login-wrap-right d-flex align-items-center justify-content-center p-3 flex-column">
                            <h1>Welcome Back !</h1>
                            <div className="form-wrapper">
                                <form onSubmit={LoginProcess}>
                                    <div className="mb-3">
                                        <Form.Label>Choose User Type</Form.Label>
                                        <div>
                                            <label className="custom-radio-btn">
                                                <input type='radio' name='userType' value="doctor" />
                                                <span className="checkMark"><img src={DoctorImg} alt='Doctor' />Doctor</span>
                                            </label>
                                            <label className="custom-radio-btn ms-3">
                                                <input type='radio' name='userType' value="patient" />
                                                <span className="checkMark"><img src={PatientImg} alt='Patient' />Patient</span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="inputPassword5">Email / Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            id="email"
                                            name="email"
                                            onChange={handelFormData}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            id="inputPassword5"
                                            name="password"
                                            onChange={handelFormData}
                                        />
                                    </div>
                                    {
                                        apiError &&
                                        <div className="mb-3 w-100 text-danger">
                                            {apiError}
                                        </div>
                                    }

                                    <div className="text-center mt-5 mb-5">
                                        <Button variant="success" disabled={loader} className="login-btn" type='submit'>Login
                                            {
                                                loader && <Spinner animation="border" variant="light" size="sm" className="ms-2" />
                                            }
                                        </Button>
                                    </div>
                                </form>
                                <p className="text-center small">Don't have any account? <Link to="/signup">Signup</Link> here</p>

                            </div>
                        </div>
                    </div>
            }
        </>

    )
}