import { useState, version } from 'react';
import './App.css';

function MyButton({ onClick, className }) {
    return (
        <button className={className} onClick={onClick}>
            MyButton
        </button>
    );
}

const hong = { name: 'Hong', hobbies: ['Bike', 'Tennis'] };

const AboutMe = ({ myinfo }) => {
    const { name, hobbies } = myinfo;
    return (
        <>
            <h1>{name}</h1>
            <ul style={{ listStyle: 'none' }}>
                {hobbies.map((hobby) => (
                    <li key={hobby}>{hobby}</li>
                ))}
            </ul>
        </>
    );
};

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="flex flex-col justify-center items-center mt-5">
            <h1 className="text-3xl">Vite React {version}</h1>
            <MyButton
                onClick={() => setIsLoggedIn(!isLoggedIn)}
                className="bg-blue-300 text-white px-6 py-4 rounded hover:bg-blue-500"
            />
            {isLoggedIn ? <AboutMe myinfo={hong} /> : <h3>Login Form</h3>}
        </div>
    );
}

export default App;
