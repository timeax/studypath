import { ft, showIf } from '@assets/fn';
import React, { PropsWithChildren } from 'react';
import Container from './Container';
import Text from '@components/Text';

const CardHeader: React.FC<PropsWithChildren<CardHeaderProps>> = ({ children, contained: contain }) => {
    //--- code here ---- //
    const component = typeof children == 'string' ? <Text weight={700} size={ft(16)}>{children}</Text> : children;
    return showIf(
        contain,
        <Container paddingBottom={0}>
            <div className='flex items-center justify-between'>
                {component}
            </div>
        </Container>,
        <div className='flex items-center justify-between'>
            {component}
        </div>
    );
}

interface CardHeaderProps {
    contained?: boolean
}

export default CardHeader
