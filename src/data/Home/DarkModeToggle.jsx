import React, { useState, useEffect } from 'react';
import { IoIosMoon } from "react-icons/io";
// import { IoMdPartlySunny } from "react-icons/io";
// import '../../App.css'; // Import your component's CSS file
 // Import your root CSS file

const DarkModeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        const setDarkModeStyles = () => {
            if (darkMode) {
                root.style.setProperty('--primary', 'rgb(219, 95, 1)');
                root.style.setProperty('--heading-color', 'rgb(255, 249, 249)');
                root.style.setProperty('--bg-shade', 'rgb(30, 29, 29)');
                root.style.setProperty('--github', 'rgb(255, 62, 62)');
                root.style.setProperty('--darkblue', 'rgb(0, 13, 51)');
                root.style.setProperty('--black', 'rgb(255, 255, 255)');
                root.style.setProperty('--white', 'rgb(0, 0, 0)');
            } else {
                root.style.setProperty('--primary', 'rgb(32, 115, 239)');
                root.style.setProperty('--heading-color', 'black');
                root.style.setProperty('--bg-shade', 'rgb(239, 239, 253)');
                root.style.setProperty('--github', 'rgb(255, 62, 62)');
                root.style.setProperty('--darkblue', 'rgb(0, 13, 51)');
                root.style.setProperty('--black', 'black');
                root.style.setProperty('--white', 'white');
            }
        };
        setDarkModeStyles();
    }, [darkMode]);

    return (
        <div className='dark--button'>
            <button onClick={() => setDarkMode(!darkMode)} className="btn-outline-primary btn dark--mode">
            <IoIosMoon />
            {/* <IoMdPartlySunny /> */}
            </button>
        </div>
    );
};

export default DarkModeToggle;
