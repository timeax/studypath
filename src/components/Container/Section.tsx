import React, { PropsWithChildren } from 'react';
import styles from '@styles/modules/section.module.scss';
import { showIf } from '@assets/fn';
import Tag, { SxProps } from '@components/Base';
import { classNames } from 'primereact/utils';

const Section: React.FC<SectionProps> = ({ children, className, contain = true, as: element = 'section', sx, ...props }) => {
    //--- code here ---- //
    return (
        <Tag element={element as 'div'} className={classNames(styles.main, className)} sx={sx} {...props}>
            {showIf(contain, <div className={styles.container}>{children}</div>, children)}
        </Tag>
    );
}

interface SectionProps extends PropsWithChildren, AppElement {
    contain?: boolean;
    as?: any,
    sx?: SxProps
    dotted?: boolean;
}

export default Section
