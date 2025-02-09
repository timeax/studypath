"use client";

import React, { JSXElementConstructor } from "react";
import { type CSSProperties } from "react";
import styled, { WebTarget } from "styled-components";
import isPropValid from '@emotion/is-prop-valid';
import cssprops from "@assets/fn/cssprops";
import { showIf } from "@assets/fn";
import { classNames } from "primereact/utils";
import calc from 'number-precision';



const StyledTag = styled.div
    .withConfig({ shouldForwardProp: (prop, element) => verify(prop, element) })
    //@ts-ignore
    <{ sx?: SxProps } & StyledProps>(({ sx = {}, ...props }) => {
        let cssProps: StyledProps = {};

        Object.keys(props).forEach(item => {
            if (item == 'mx') {
                cssProps.marginLeft = props[item];
                cssProps.marginRight = props[item];
            } else if (item === 'my') {
                cssProps.marginTop = props[item];
                cssProps.marginBottom = props[item];
            } else if (item === 'px') {
                cssProps.paddingLeft = props[item];
                cssProps.paddingRight = props[item];
            } else if (item === 'py') {
                cssProps.paddingTop = props[item];
                cssProps.paddingBottom = props[item];
                //@ts-ignore
            } else cssprops.includes(item) && (cssProps[item] = props[item]);
        });

        return { ...cssProps, ...sx }
    });


type TT = JSXElementConstructor<any> | keyof React.JSX.IntrinsicElements;

//@ts-ignore
function Tag<T extends TT = keyof React.JSX.IntrinsicElements>(args: TagProps<{ element?: T }> & StyledProps & { [x: string]: any }) {
    //@ts-ignore
    const { element = 'div', sx, tagRef, ...props } = args;
    //@ts-ignore--- code here ---- //
    return <StyledTag sx={sx} as={element} {...(tagRef ? { ref: tagRef } : {})}  {...props} />;
}

type TagProps<T extends { element: TT }>
    = PropsWithSx &
    GlobalAttributes & {
        tagRef?: React.RefObject<any>
    } & React.ComponentProps<T['element'] | 'div'> & T

export interface PropsWithSx {
    sx?: SxProps
}


type CSSRule = {
    [P in ElementType<HTMLTags>]?: CSSProperties | CSSRuleRef;
} & AnyRule;

type CSSRuleRef = {
    [P in ElementType<HTMLTags>]?: CSSProperties | CSSRule;
} & AnyRule;

type AnyRule = {
    [x: string]: CSSProperties | CSSRule | string | number;
}

export type SxProps = CSSProperties | CSSRule;

export default Tag;

const exempt = [
    'sx'
];
export function verify(prop: string, element: WebTarget): boolean {
    if (exempt.includes(prop)) return false;
    if (typeof element !== 'string') return true;
    return prop === 'tabIndex' || (isPropValid(prop) && prop !== 'color')
}


export const Percent: React.FC<PercentProps> = ({ round, weight = 'normal', value, percent, size = '12px', variant = 'text', shape, ...props }) => {
    //--- code here ---- //
    const isLower = value < 0;
    return (
        //@ts-ignore
        <Tag {...props} element='span' fontSize={size} fontWeight={weight} borderRadius={shape} className={classNames({
            'px-3 py-2': variant == 'contained' || variant === 'outlined',
            'bg-danger-300 text-white': variant == 'contained' && isLower,
            'bg-success-300 text-white': variant == 'contained' && !isLower,
            'border border-solid border-danger-300 text-danger': variant == 'outlined' && isLower,
            'border border-solid border-success-300 text-success': variant == 'outlined' && !isLower,
            'text-danger-600': variant == 'text' && isLower,
            'text-success-600': variant == 'text' && !isLower,
        })}>
            {showIf(round, calc.round(value, round as number), value)}
            {showIf(percent, '%')}
        </Tag>
    );
}

interface PercentProps extends AppElement {
    value: number;
    percent?: boolean;
    size?: string;
    variant?: 'contained' | "outlined" | 'text';
    shape?: string;
    weight?: string | number
    px?: string | number;
    py?: string | number;
    sx?: SxProps
    round?: number;
}
