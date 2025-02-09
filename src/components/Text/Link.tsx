import Tag, { SxProps } from '@components/Base';
import { Link } from '@inertiajs/react';
import { ColorType } from '@typings/project';
import React, { PropsWithChildren } from 'react';

const LinkButton: React.FC<PropsWithChildren<LinkButtonProps>> = ({ children, href, variant, size, ...props }) => {
    //--- code here ---- //
    return (
        <Tag element={Link} href={href} {...props}>
            {children}
        </Tag>
    );
}

interface LinkButtonProps extends AppElement {
    variant?: 'pill' | 'text' | 'underline';
    href: string;
    size?: 'large' | 'small' | 'medium' | 'normal';
    color?: ColorType;
    sx?: SxProps
}

export default LinkButton
