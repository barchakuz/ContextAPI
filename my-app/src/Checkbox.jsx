import React, { useContext } from 'react';
import { ThemeContext } from './Context/ThemeContext';

function Checkbox() {
    const { thememode, darkmode, lightmode } = useContext(ThemeContext);

    const handleTheme = (e) => {
        e.preventDefault();
        const modeState = e.currentTarget.checked;
        if (modeState) {
            lightmode(); // Corrected function name
        } else {
            darkmode();
        }
    };

    return (
        <div>
            <input type="checkbox" name="Mode" id="Mode" value="" checked={thememode === 'dark'} onChange={handleTheme} />
        </div>
    );
}

export default Checkbox;
