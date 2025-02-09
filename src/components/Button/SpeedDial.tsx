import React from 'react';
import { SpeedDial as PrimeSpeedDial } from 'primereact/speeddial'
import { MenuItem } from 'primereact/menuitem';
const SpeedDial: React.FC<SpeedDialProps> = ({ children, pos }) => {
    //--- code here ---- //
    return (
        <>
            <PrimeSpeedDial model={children} direction={pos} className="speeddial-bottom-left left-0 bottom-0" buttonClassName="p-button-help" />
        </>
    );
}

interface SpeedDialProps {
    pos?: "left" | "right" | "up" | "down" | "up-left" | "up-right" | "down-left" | "down-right";
    children: Array<MenuItem>
}

export default SpeedDial
