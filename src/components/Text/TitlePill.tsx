import React from 'react';
import { IoSparkles } from "react-icons/io5";
import Text from '.';
import { classNames } from 'primereact/utils';
import styles from '@styles/modules/text.module.scss';


const TitlePill: React.FC<React.PropsWithChildren<TitlePillProps>> = ({ children }) => {
    //--- code here ---- //
    return (
        <Text className={classNames('leading-[17.5px] font-medium text-center position-relative', styles.titlePill)}>
            {children}
            <span><IoSparkles /></span>
        </Text>
    );
}

interface TitlePillProps {

}

export default TitlePill
