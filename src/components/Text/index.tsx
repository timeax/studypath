import Tag, { SxProps } from '@components/Base';
import { classNames } from 'primereact/utils';
import React, { PropsWithChildren } from 'react';
import styles from '@styles/text.module.scss';
import { ft, showIf } from '@assets/fn';
import { Link } from 'react-router';

const Text: React.FC<PropsWithChildren<TextProps>> = ({ "s-header": smallHeader, iconProps = {}, ref, capitalise, upper, select, center, link, dark, label, children, size, title, color, weight, italic, banner, text, nlink, small, heading, normal = true, sx = {}, className, gap = 3, icon, iconPos = 'left', iconClass, currency, format, thousandSeparator, isNs, prefix, suffix, ...rest }) => {
    //--- code here ---- //
    sx.fontWeight = sx.fontWeight ? sx.fontWeight : weight;
    sx.fontSize = sx.fontSize ? sx.fontSize : (typeof size == 'number' ? ft(size) : size);

    let element = label ? 'label' : link ? Link : 'span';

    //----
    return (
        <Tag {...(link ? { href: link } : {})} className={classNames(styles.normal, styles.main, className, {
            [styles.nlink]: nlink,
            [styles.banner]: banner,
            [styles.smallHeader]: smallHeader,
            [styles.title]: title,
            [styles.text]: text,
            [styles.heading]: heading,
            [styles.small]: small,
            ['text-center']: center,
            [styles.titleColor]: dark,
            'select-text': select,
            ['uppercase']: upper,
            'capitalize': capitalise
        })} element={element} sx={sx} {...rest}>
            {showIf(icon, (
                <Tag element='span' className='flex items-center' gap={ft(gap)}>
                    <Tag order={iconPos == 'right' ? 3 : 0} className={iconClass} element='span'><Icon {...iconProps} icon={icon} /></Tag>
                    <Tag element={"span"} order={iconPos == 'right' ? 0 : 3}>{children}</Tag>
                </Tag>
            ), children)}
        </Tag>
    );
}

export interface IconProps {
    icon: React.ReactNode,
    /**Image size */
    size?: any,
    /**Image class name */
    className?: string,
    /**SVG node class name */
    styleClass?: string
}

export const Icon: React.FC<IconProps> = ({ icon, size, className, styleClass }) => {
    let type: 'className' | 'react' | 'image' = 'react';
    if (typeof icon == 'string') {
        if (icon.includes('/') || icon.startsWith('http') || icon.includes('\\')) type = 'image';
        else type = 'className'
    }

    switch (type) {
        case 'className': return <i className={classNames(icon as string, styleClass)}></i>;
        case 'react': return styleClass ? <span className={styleClass}>{icon}</span> : icon;
        case 'image': return <img width={size} className={className} src={icon as string} />
    }
}

//@ts-ignore
interface TextProps extends AppElement<React.AllHTMLAttributes<HTMLParagraphElement>> {
    's-header'?: boolean
    /**64px sized text */
    banner?: boolean;
    /**16px sized text - this is the default for paragraphs */
    text?: boolean;
    /**12 or 11 px sized text */
    small?: boolean;
    /**Custom size */
    size?: StringType;
    /**48px sized text */
    title?: boolean;
    label?: boolean;
    /**24px sized text */
    heading?: boolean;
    /**14px sized text */
    nlink?: boolean;
    /**14px sized text */
    normal?: boolean;

    /**For cards */
    'card-title'?: boolean;
    //---------
    color?: string;
    center?: boolean;
    weight?: StringType;
    //--------
    dark?: boolean;
    //--------
    italic?: boolean;
    //--------
    sx?: SxProps;
    link?: string;
    icon?: React.ReactNode;
    iconClass?: string;
    innerIconClass?: string
    gap?: number;
    iconPos?: 'left' | 'right';
    iconProps?: Omit<IconProps, 'icon'>;

    select?: boolean;
    capitalise?: boolean;
    upper?: boolean;
    ref?: any;
    format?: string;
    currency?: boolean;
    thousandSeparator?: boolean | string
    isNs?: boolean;
    prefix?: string;
    suffix?: string;
}

export default Text
