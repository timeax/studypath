import React, { PropsWithChildren } from 'react';
import { ScrollPanel } from 'primereact/scrollpanel';
import { showIf } from '@assets/fn';
import Container from './Container';

const CardBody: React.FC<CardBodyProps> = ({ children, className, contained, noHeader, container = {} }) => {
    //--- code here ---- //
    return (
        <ScrollPanel pt={{
            content: className as any,
        }}>
            {showIf(
                contained,
                <Container  {...(noHeader ? container ?? {} : { paddingTop: 0, ...container ?? {} })}>{children}</Container>,
                children
            )}
        </ScrollPanel>
    );
}

interface CardBodyProps extends AppElement<React.AllHTMLAttributes<HTMLDivElement>> {
    contained?: boolean;
    noHeader?: boolean;
    container?: any
}

export default CardBody
