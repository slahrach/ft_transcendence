import { Link, useNavigate } from 'react-router-dom';
import '../css/login.css';
import { useToast } from '@chakra-ui/react';
import client from '../components/Client';
import { useState } from 'react';

const SetPassword = (props: any) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const toast = useToast();
    const navigate = useNavigate();
    const SubmitPassword = async (e: any) => {
        e.preventDefault();
        try {
            // console.log(`Bearer ${localStorage.getItem('token')}`);
            const data = {
                password: password,
                confirmPassword: confirmPassword,
                username: username
            };
            const headers = {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            };
            const resp = await client.post(
                '/auth/set-new-username-password',
                data,
                {
                    headers: headers
                }
            );
            // console.log(resp);
            if (resp.status === 201) {
                toast({
                    title: 'Password Set.',
                    description: 'Your password is set successfully.',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                    position: 'bottom-right'
                });
                props.setFirstLogin(true);
                navigate('/complete-profile');
            }
        } catch (error: any) {
            console.log("Error", error);
            const errors = error?.response?.data?.errors;
            for (let index = 0; index < errors.length; index++) {
                toast({
                    title: 'Error.',
                    description: errors[index].message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'bottom-right'
                });
                break;
            }
        }
    };
    return (
        <div>
            <div className="signupContainer">
                <div className="left">
                    <Link to="/">
                        <div className="logo">
                            <span className="Twin1">TwinP</span>
                            <svg
                                className="racquet1"
                                version="1.0"
                                xmlns="http://www.w3.org/2000/svg"
                                width="55.000000pt"
                                height="57.000000pt"
                                viewBox="0 0 1095.000000 616.000000"
                                preserveAspectRatio="xMidYMid meet"
                            >
                                <g
                                    transform="translate(0.000000,616.000000) scale(0.100000,-0.100000)"
                                    fill="#ffffff"
                                    stroke="none"
                                >
                                    <path
                                        d="M4908 4613 l-48 -48 283 -266 c155 -146 299 -280 320 -299 92 -80
                    116 -199 61 -298 -65 -119 -66 -121 -65 -185 1 -109 61 -243 170 -379 71 -89
                    298 -312 402 -396 242 -194 494 -326 748 -390 95 -24 125 -27 281 -27 152 0
                    185 3 255 23 150 43 281 120 354 209 100 122 39 325 -166 552 l-49 54 -49 -19
                    c-34 -13 -75 -19 -130 -19 -68 0 -89 5 -145 31 -79 38 -140 97 -177 172 -23
                    47 -29 73 -31 148 l-4 92 -106 50 c-114 53 -200 85 -407 151 -72 23 -174 61
                    -228 85 -193 87 -219 109 -541 445 -224 234 -307 314 -343 332 -42 21 -66 24
                    -193 27 l-145 3 -47 -48z"
                                    />
                                    <path
                                        d="M4405 2835 c-253 -26 -545 -92 -750 -169 -208 -79 -289 -179 -256
                    -318 18 -82 51 -135 118 -199 132 -122 334 -187 773 -245 166 -23 652 -26 890
                    -6 85 7 250 15 365 18 l210 6 440 -137 c521 -162 488 -159 680 -71 106 48 121
                    58 133 88 15 36 12 122 -6 140 -9 9 -326 95 -697 188 -178 45 -250 78 -272
                    125 -17 35 -16 39 1 83 10 26 24 64 32 84 19 51 9 90 -38 143 -92 104 -395
                    201 -813 261 -153 22 -637 27 -810 9z"
                                    />
                                </g>
                            </svg>
                            <span className="ng1">ng</span>
                        </div>
                    </Link>
                    <div className="paragraph">
                        <svg
                            className="illustration"
                            xmlns="http://www.w3.org/2000/svg"
                            width="700"
                            height="400"
                            viewBox="0 0 751.57 539.42"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                        >
                            <path
                                d="m19.9,538.23c0,.66.53,1.19,1.19,1.19h729.29c.66,0,1.19-.53,1.19-1.19s-.53-1.19-1.19-1.19H21.09c-.66,0-1.19.53-1.19,1.19Z"
                                fill="#3f3d58"
                            />
                            <path
                                d="m253.43,95.15H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18ZM19.53,64.79c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z"
                                fill="#e2e3e4"
                            />
                            <path
                                d="m253.43,284.5H19.53c-8.65,0-15.68-7.03-15.68-15.68s7.03-15.68,15.68-15.68h233.9c8.65,0,15.68,7.03,15.68,15.68s-7.03,15.68-15.68,15.68Z"
                                fill="#ffffff"
                            />
                            <path
                                d="m176.78,31.36H15.68C7.03,31.36,0,24.33,0,15.68S7.03,0,15.68,0h161.1c8.65,0,15.68,7.03,15.68,15.68s-7.03,15.68-15.68,15.68Z"
                                fill="#e2e3e4"
                            />
                            <path
                                d="m253.43,158.43H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18Zm-233.9-30.36c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z"
                                fill="#e2e3e4"
                            />
                            <path
                                d="m253.43,221.72H19.53c-8.92,0-16.18-7.26-16.18-16.18s7.26-16.18,16.18-16.18h233.9c8.92,0,16.18,7.26,16.18,16.18s-7.26,16.18-16.18,16.18Zm-233.9-30.36c-7.82,0-14.18,6.36-14.18,14.18s6.36,14.18,14.18,14.18h233.9c7.82,0,14.18-6.36,14.18-14.18s-6.36-14.18-14.18-14.18H19.53Z"
                                fill="#e2e3e4"
                            />
                            <path
                                d="m11.49,51.17h61.3c1.46,0,2.65,1.18,2.65,2.65h0c0,1.46-1.19,2.65-2.65,2.65H11.49c-1.46,0-2.65-1.18-2.65-2.65h0c0-1.46,1.19-2.65,2.65-2.65Z"
                                fill="#e2e3e4"
                            />
                            <path
                                d="m11.49,115.95h61.3c1.46,0,2.65,1.18,2.65,2.64h0c0,1.46-1.19,2.65-2.65,2.65H11.49c-1.46,0-2.65-1.18-2.65-2.64h0c0-1.46,1.19-2.65,2.65-2.65Z"
                                fill="#e2e3e4"
                            />
                            <path
                                d="m11.49,180.74h61.3c1.46,0,2.65,1.18,2.65,2.65h0c0,1.46-1.19,2.64-2.65,2.64H11.49c-1.46,0-2.65-1.18-2.65-2.65h0c0-1.46,1.19-2.64,2.65-2.64Z"
                                fill="#e2e3e4"
                            />
                            <g>
                                <polygon
                                    points="447.08 132.26 424.72 139.62 424.72 107.43 445.01 107.43 447.08 132.26"
                                    fill="#9f616a"
                                />
                                <circle
                                    cx="427.49"
                                    cy="94.06"
                                    r="22.28"
                                    fill="#9f616a"
                                />
                                <path
                                    d="m433.61,91.85c-3.73-.11-6.18-3.88-7.63-7.32s-2.94-7.39-6.4-8.81c-2.83-1.16-7.82,6.69-10.05,4.6-2.33-2.18-.06-13.37,2.41-15.38,2.47-2.01,5.85-2.4,9.03-2.55,7.76-.36,15.57.27,23.18,1.86,4.71.98,9.55,2.46,12.95,5.86,4.3,4.32,5.4,10.83,5.71,16.92.32,6.23-.04,12.75-3.07,18.2s-9.37,9.47-15.45,8.08c-.61-3.3.01-6.69.25-10.05.23-3.35-.01-6.97-2.06-9.64-2.04-2.67-6.42-3.73-8.8-1.36"
                                    fill="#2f2e43"
                                />
                                <path
                                    d="m461.02,99.57c2.23-1.63,4.9-3,7.64-2.66,2.96.36,5.47,2.8,6.23,5.69s-.09,6.07-1.93,8.43c-1.83,2.36-4.56,3.92-7.44,4.7-1.67.45-3.5.64-5.09-.04-2.34-1.01-3.61-4-2.69-6.38"
                                    fill="#2f2e43"
                                />
                                <g>
                                    <path
                                        id="uuid-00bc58e7-734f-4d7c-a085-03c0cd267642-97"
                                        d="m375.76,309.2c-1.49,7.32,1.24,14.01,6.08,14.94s9.97-4.26,11.45-11.58c.63-2.92.53-5.94-.29-8.82l18.43-114.75-23.05-4.34-8.9,116.5c-1.89,2.36-3.16,5.12-3.72,8.06h0Z"
                                        fill="#9f616a"
                                    />
                                    <path
                                        d="m424.48,124.85h-15.73c-11.12,1.69-14.14,7.62-16.67,18.58-3.86,16.72-8.79,38.98-7.81,39.31,1.57.52,28.35,13.12,42,10.24l-1.79-68.13h0Z"
                                        fill="#e2e3e4"
                                    />
                                </g>
                                <rect
                                    x="418.75"
                                    y="490.36"
                                    width="20.94"
                                    height="29.71"
                                    fill="#9f616a"
                                />
                                <path
                                    d="m398.36,538.05c-2.2,0-4.16-.05-5.64-.19-5.56-.51-10.87-4.62-13.54-7.02-1.2-1.08-1.58-2.8-.96-4.28h0c.45-1.06,1.34-1.86,2.45-2.17l14.7-4.2,23.8-16.06.27.48c.1.18,2.44,4.39,3.22,7.23.3,1.08.22,1.98-.23,2.68-.31.48-.75.76-1.1.92.43.45,1.78,1.37,5.94,2.03,6.07.96,7.35-5.33,7.4-5.59l.04-.21.18-.12c2.89-1.86,4.67-2.71,5.28-2.53.38.11,1.02.31,2.75,17.44.17.54,1.38,4.48.56,8.25-.89,4.1-18.81,2.69-22.4,2.37-.1.01-13.52.97-22.71.97h0Z"
                                    fill="#2f2e43"
                                />
                                <rect
                                    x="487.82"
                                    y="470.31"
                                    width="20.94"
                                    height="29.71"
                                    transform="translate(-181.25 337.18) rotate(-31.95)"
                                    fill="#9f616a"
                                />
                                <path
                                    d="m475.72,533.98c-2.46,0-4.72-.3-6.33-.58-1.58-.28-2.82-1.54-3.08-3.12h0c-.18-1.14.15-2.29.93-3.14l10.25-11.34,11.7-26.22.48.26c.18.1,4.39,2.43,6.56,4.43.83.76,1.24,1.57,1.22,2.4-.01.58-.23,1.04-.45,1.37.6.16,2.23.22,6.11-1.42,5.66-2.39,3.42-8.41,3.32-8.66l-.08-.2.09-.19c1.47-3.11,2.52-4.77,3.14-4.94.39-.11,1.03-.28,11.56,13.35.43.36,3.54,3.07,4.84,6.7,1.41,3.95-14.54,12.24-17.75,13.86-.1.08-16.79,12.21-23.65,15.66-2.72,1.37-5.94,1.79-8.87,1.79h0Z"
                                    fill="#2f2e43"
                                />
                                <path
                                    d="m455.11,241.91h-58.63l-5.32,54.54,23.28,201.52h29.93l-11.97-116.39,48.55,105.08,26.6-18.62-37.91-98.1s13.54-85.46,2.9-106.75c-10.64-21.28-17.43-21.28-17.43-21.28h0Z"
                                    fill="#2f2e43"
                                />
                                <polygon
                                    points="484.28 245.23 391.16 245.23 419.1 124.85 459.67 124.85 484.28 245.23"
                                    fill="#e2e3e4"
                                />
                                <path
                                    id="uuid-ece83039-1aa0-468e-a846-e0cb6ecd6032-98"
                                    d="m492.66,309.2c1.49,7.32-1.24,14.01-6.08,14.94s-9.97-4.26-11.45-11.58c-.63-2.92-.53-5.94.29-8.82l-18.43-114.75,23.05-4.34,8.9,116.5c1.89,2.36,3.16,5.12,3.72,8.06h0Z"
                                    fill="#9f616a"
                                />
                                <path
                                    d="m443.94,124.85h15.73c11.12,1.69,14.14,7.62,16.67,18.58,3.86,16.72,8.79,38.98,7.81,39.31-1.57.52-28.35,13.12-42,10.24l1.79-68.13h0Z"
                                    fill="#e2e3e4"
                                />
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="right">
                    <div className="animation">
                        <svg
                            className="racqueta"
                            version="1.0"
                            xmlns="http://www.w3.org/2000/svg"
                            width="85.000000pt"
                            height="87.000000pt"
                            viewBox="0 0 1095.000000 616.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,616.000000) scale(0.100000,-0.100000)"
                                fill="#ffffff"
                                stroke="none"
                            >
                                <path
                                    d="M4908 4613 l-48 -48 283 -266 c155 -146 299 -280 320 -299 92 -80
                116 -199 61 -298 -65 -119 -66 -121 -65 -185 1 -109 61 -243 170 -379 71 -89
                298 -312 402 -396 242 -194 494 -326 748 -390 95 -24 125 -27 281 -27 152 0
                185 3 255 23 150 43 281 120 354 209 100 122 39 325 -166 552 l-49 54 -49 -19
                c-34 -13 -75 -19 -130 -19 -68 0 -89 5 -145 31 -79 38 -140 97 -177 172 -23
                47 -29 73 -31 148 l-4 92 -106 50 c-114 53 -200 85 -407 151 -72 23 -174 61
                -228 85 -193 87 -219 109 -541 445 -224 234 -307 314 -343 332 -42 21 -66 24
                -193 27 l-145 3 -47 -48z"
                                />
                                <path
                                    d="M4405 2835 c-253 -26 -545 -92 -750 -169 -208 -79 -289 -179 -256
                -318 18 -82 51 -135 118 -199 132 -122 334 -187 773 -245 166 -23 652 -26 890
                -6 85 7 250 15 365 18 l210 6 440 -137 c521 -162 488 -159 680 -71 106 48 121
                58 133 88 15 36 12 122 -6 140 -9 9 -326 95 -697 188 -178 45 -250 78 -272
                125 -17 35 -16 39 1 83 10 26 24 64 32 84 19 51 9 90 -38 143 -92 104 -395
                201 -813 261 -153 22 -637 27 -810 9z"
                                />
                            </g>
                        </svg>
                    </div>

                    <form onSubmit={(e) => SubmitPassword(e)}>
                        <div className="form-group">
                            <label htmlFor="username" className="after:content-['*'] after:ml-0.5 after:text-red-500">username</label>
                            <input
                                className="form-control"
                                type="text"
                                name="username"
                                value={username}
                                id="username"
                                placeholder="Enter username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <label htmlFor="password" className="after:content-['*'] after:ml-0.5 after:text-red-500">Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="password"
                                value={password}
                                id="password"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <label htmlFor="password" className="after:content-['*'] after:ml-0.5 after:text-red-500">Confirm Password</label>
                            <input
                                className="form-control"
                                type="password"
                                name="confirmPassword"
                                value={confirmPassword}
                                id="password2"
                                placeholder="Confirm password"
                                onChange={(e) =>
                                    setConfirmPassword(e.target.value)
                                }
                                required
                            />
                        </div>
                        <div className="submit">
                            <input
                                type="submit"
                                onClick={(e) => SubmitPassword(e)}
                                value="Submit"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SetPassword;
