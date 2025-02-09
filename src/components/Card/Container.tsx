import React, { PropsWithChildren } from 'react';
import styles from '@styles/card.module.scss';
import Tag from '@components/Base';

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ children, ...rest }) => {
    //--- code here ---- //
    return (
        <Tag element='div' data-section={'container'} className={styles.container} {...rest}>
            {children}
        </Tag>
    );
}

interface ContainerProps extends StyledProps {

}

export default Container
