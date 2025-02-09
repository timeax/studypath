import React, { Fragment, useEffect, useState } from 'react';
import { Button as PrimeButton, ButtonProps as PrimeButtonProps } from 'primereact/button';
import { ColorType } from '@typings/project';
import { classNames } from 'primereact/utils';
import styles from '@styles/button.module.scss';
import { classList, colorVar, showIf, transparency } from '@assets/fn';
import styled from 'styled-components';
import Tag, { SxProps } from '@components/Base';
import { Link } from 'react-router';

const Button: React.FC<ButtonProps> = ({
    bgColor = 'primary',
    disabled: defaultDisabledState, icon,
    iconPos,
    loading: defaultState,
    raised,
    squared,
    rounded = !squared,
    size = 'normal',
    variant = 'contained',
    children,
    type = 'text',
    href, submit,
    externalLink,
    modalFor,
    onClick,
    before, after, closeModal,
    ...rest
}) => {
    //--- code here ---- //
    const extra: { [x: string]: boolean } = {};

    if (variant == 'outline') extra.outlined = true;
    if (variant == 'text') extra.text = true;

    const Element = href ? (externalLink ? 'a' : Link) : Fragment;

    const [loading] = useState(defaultState);
    const [disabled, setDisabled] = useState(defaultDisabledState);

    useEffect(() => {
        if (defaultDisabledState == undefined) return;
        setDisabled(defaultDisabledState);
    }, [defaultDisabledState]);

    const clc = (value: ColorType) => variant == 'contained' && bgColor == value; 

    return (
        //@ts-ignore
        <Element {...(href ? { to: href, className:styles.link } : {})}>
            <Tag
                element={StyledButton}
                {...rest}
                onClick={onClick}
                severity={bgColor as any}
                icon={icon}
                iconPos={iconPos}
                {...extra}
                loading={loading}
                raised={raised}
                size={size as any}
                disabled={disabled}
                label={children as any}
                variant={variant}
                rounded={rounded}
                buttontype={type}
                pt={{
                    label(options) {
                        const props = options?.props;
                        if (props) {
                            const { size } = props;
                            return {
                                className: classNames({
                                    'font-normal': size == 'normal' as any,
                                    'hidden': children == undefined
                                })
                            }
                        }
                    },

                    root(options) {
                        const props = options?.props as ButtonProps;
                        //----
                        return {
                            className: classNames(styles.main, styles[size], styles['icon-' + iconPos],
                                {
                                    [classList(
                                        styles.bodied,
                                        'cursor-pointer'
                                    )]: variant === 'contained' || variant === 'outline',
                                    [styles.icon]: props.icon && !children,

                                    'rounded-[100px]': rounded,
                                },
                                { 'rounded-md': !props.rounded, 'rounded-full': props.rounded && props.icon && !children },
                                {
                                    'bg-theme-primary text-white hover:bg-primary-800 focus:bg-primary-900': clc('primary')
                                }
                            ),
                        }
                    },
                    //@ts-ignore
                    loadingIcon: ({ props }) => ({
                        className: classNames('mx-0', {
                            'mr-2': props.loading && props.iconPos == 'left' && props.label != null,
                            'ml-2 order-1': props.loading && props.iconPos == 'right' && props.label != null,
                            'mb-2': props.loading && props.iconPos == 'top' && props.label != null,
                            'mt-2 order-2': props.loading && props.iconPos == 'bottom' && props.label != null
                        })
                    }),
                }}
            ></Tag>
        </Element>
    );
}


interface Color {
    color: string;
    text: string
}

type Palette = Color & { hover: Color, focus: Color, disabled: Color }

function getColor(color: ColorType, context: string = 'contained'): Palette {
    let trans = 100;
    const palette: Palette = {
        color: '',
        text: 'white',
        //---
        hover: {
            color: '',
            text: ''
        },

        focus: {
            color: '',
            text: ''
        },

        disabled: {
            color: '',
            text: ''
        }
    }

    if (context === 'outline') {
        palette.text = colorVar(color, 800);
        trans = 0.1;
    }

    switch (color) {
        case 'secondary':
            palette.color = transparency(colorVar(color), trans);
            if (!palette.text) palette.text = colorVar(color, 50);
            //----
            palette.hover = {
                color: colorVar(color, 400),
                text: colorVar(color, 800)
            }

            palette.focus = {
                color: colorVar(color, 600),
                text: colorVar(color, 50)
            }

            palette.disabled = {
                color: colorVar(color, 100),
                text: colorVar(color, 200)
            }
            break;
        case 'theme':
            palette.color = transparency(colorVar(color, 'bgContent'), trans);
            palette.text = colorVar(color, 'title');
            //----
            palette.hover = {
                color: colorVar(color, 'bgContent'),
                text: colorVar(color, 'title')
            }

            palette.focus = {
                color: colorVar(color, 'text'),
                text: colorVar(color, 'title')
            }

            palette.disabled = {
                color: colorVar(color, 'text'),
                text: colorVar(color, 'title')
            }
            break;

        default:
            palette.color = transparency(colorVar(color), trans);
            if (!palette.text) palette.text = colorVar(color, 50);
            //----
            palette.hover = {
                color: colorVar(color, 400),
                text: colorVar(color, 800)
            }

            palette.focus = {
                color: colorVar(color, 600),
                text: colorVar(color, 50)
            }

            palette.disabled = {
                color: colorVar(color, 100),
                text: colorVar(color, 200)
            }
            break;
    }

    return palette;
}

const StyledButton = styled(PrimeButton)<StyledButtonProps>(({ theme, ...props }) => {
    const { variant, rounded, severity: bgColor } = props;
    //----------
    const palette = getColor(bgColor as any, variant);

    return {
        display: 'flex',
        position: 'relative',

        ...showIf<SxProps>(typeof rounded === 'string', {
            borderRadius: rounded as unknown as string
        }, {}),

        ...showIf<SxProps>(variant == 'outline', {
            border: '1px solid',
            borderImageSource: `linear-gradient(180deg, ${palette.color} 0%, ${palette.hover.color} 100%)`,
            boxShadow: '0px 0px 0px 1px ' + palette.hover.color,
            color: palette.text,
        }, {})
    }
});


//@ts-ignore
interface StyledButtonProps extends PrimeButtonProps {
    variant?: 'outline' | 'contained' | 'text';
    buttontype?: 'icon' | 'text'
}

interface ButtonProps extends AppElement, StyledProps {
    icon?: React.ReactNode;
    children?: React.ReactNode
    iconPos?: 'left' | 'right' | 'top' | 'bottom';
    loading?: boolean;
    bgColor?: ColorType;
    disabled?: boolean;
    raised?: boolean;
    rounded?: boolean;
    variant?: 'outline' | 'contained' | 'text';
    size?: 'small' | 'large' | 'normal' | 'xs' | '2xs';
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    type?: 'icon' | 'text';
    href?: string;
    externalLink?: boolean;
    squared?: boolean;
    submit?: boolean;
    gap?: number;
    modalFor?: string;
    before?: boolean;
    after?: boolean;
    closeModal?: boolean
}

export default Button;
