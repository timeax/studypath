import React from 'react';
import Text from '.';
import { ft } from '@assets/fn';
import { classNames } from 'primereact/utils';

const Titlebar: React.FC<TitlebarProps> = ({ title, children, className }) => {
    //--- code here ---- //
    return (
        <div className={classNames(className, 'flex flex-col gap-2')}>
            <Text title size={ft(20)} weight={600}>{title}</Text>
            <Text normal>{children}</Text>
        </div>
    );
}

interface TitlebarProps {
    title: React.ReactNode;
    children: React.ReactNode;
    className?: string
}

export default Titlebar
