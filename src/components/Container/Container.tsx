import { ft } from '@assets/fn';
import Tag from '@components/Base';
import { classNames } from 'primereact/utils';
import React, { PropsWithChildren } from 'react';

const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ children, section, sectionClass, className }) => {
    //--- code here ---- //
    const container = <Tag px={ft(56)} className={className}>{children}</Tag>;


    if (section) {
        return (
            <section className={classNames(sectionClass, 'py-[112px]')}>
                {container}
            </section>
        )
    }
    return container;
}

interface ContainerProps {
    dotted?: boolean;
    section?: boolean;
    sectionClass?: string;
    className?: string
}

export default Container
