import Tag from '@components/Base';
import React, { ReactNode } from 'react';
import CardBody from './CardBody';
import { showIf } from '@assets/fn';
import CardHeader from './CardHeader';
import styles from '@styles/card.module.scss';
import { classNames } from 'primereact/utils';
import { CSSProperties } from 'styled-components';

const Card: React.FC<CardProps> = ({ px, py, header, children, variant = 'contained', className, bodyClass, container, ...rest }) => {
    //--- code here ---- //
    return (
        <Tag element='div' {...rest} className={classNames(className, styles.main, {
            [styles.contained]: variant == 'contained',
            [styles.gradient]: variant == 'gradient',
            [styles.filled]: variant !== 'none'
        })}>
            {showIf<any>(header, () => <CardHeader contained={variant !== 'none'}>{header}</CardHeader>)}
            <CardBody container={container} noHeader={header == undefined} contained={variant !== 'none'} className={bodyClass}>
                {children}
            </CardBody>
        </Tag>
    );

}

//@ts-ignore
interface CardProps extends StyledProps, AppElement<React.AllHTMLAttributes<HTMLDivElement>> {
    header?: ReactNode;
    variant?: 'gradient' | 'contained' | 'outlined' | 'none';
    shadow?: string | boolean;
    bodyClass?: string;
    container?: CSSProperties
}

export default Card;
