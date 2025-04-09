import React, { useState } from 'react';

interface ToggleSwitchProps {   
    initialState?: boolean;
}

function ToggleSwitch({ initialState = false }: ToggleSwitchProps) {
    const [isOn, setIsOn] = useState(initialState);

    const toggleSwitch = () => setIsOn(!isOn);

    return (
        <button onClick={toggleSwitch} aria-pressed={isOn}>
            {isOn ? 'On' : 'Off'}
        </button>
    );
}

export default ToggleSwitch;

// Skapa ett test för funktionen ToggleSwitch i ToggleSwitch.test.ts
  // rendererar komponenten korrekt
  // kontrollerar att knappen ändrar text när den klickas

