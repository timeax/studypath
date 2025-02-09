import { ft } from '@assets/fn';
import Tag, { SxProps } from '@components/Base';
import Text from '@components/Text';
import { useDialog } from '@services/ModalProvider';
import { ColorType } from '@typings/project';
import { classNames } from 'primereact/utils';
import React, { useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Tool: React.FC<ToolProps> = ({ icon, children, className, onClick, loading: defLoad, bgColor, disabled
   : state, color, gap = 10, hover, roundness, iconClassName, pos: iconPos, imgClassName, modalFor, loadingPos = 'right', imgSize, size, small, variant = 'outlined'
}) => {
   //--- code here ---- //
   const [loading, setLoading] = useState(defLoad);
   const [disabled, setDisabled] = useState(state);

   useEffect(() => setLoading(defLoad), [defLoad]);
   useEffect(() => setDisabled(disabled), [state]);

   const dialog = useDialog();

   return (
      <Text onClick={e => {
         if (modalFor) dialog?.open(modalFor);
         const event = {
            ...e,
            set loading(value: boolean) {
               setLoading(value)
               setDisabled(value)
            }
         }
         onClick?.(event as any)
      }} className={classNames(
         '!flex item-center !py-1 !px-3 cursor-pointer',
         className, hover, color,
         {
            ['pointer-events-none']: disabled || loading,
            'border': variant == 'outlined',
            'rounded-full': (typeof roundness) == 'undefined'
         },
         {
            'bg-primary-50/40 text-primary hover:bg-primary-100 hover:text-primary-600': bgColor === 'primary',
            'bg-warning-50/40 text-warning-400 hover:bg-warning-50 hover:text-warning-600': bgColor === 'warning',
            'bg-danger-50/40 text-danger-400 hover:bg-danger-50 hover:text-danger': bgColor === 'danger',
            'bg-info-50/40 text-info-400 hover:bg-info-50 hover:text-info': bgColor === 'info',
            'bg-success-50 text-success hover:bg-success-100 hover:text-success-600': bgColor === 'success',
            // 'bg-grey-50/40 text-grey-400 hover:bg-grey-50 hover:text-grey': bgColor === 'grey',
         }

      )} style={{ borderRadius: typeof roundness == 'number' ? ft(roundness) : typeof roundness == 'string' ? roundness : undefined }} icon={icon} gap={gap} iconPos={iconPos}
         size={classNames({
            [ft(13)]: size == 'small',
            [typeof size == 'number' ? ft(size as any) : '']: typeof size == 'number'
         })}
         iconProps={{ className: imgClassName, styleClass: iconClassName, size: imgSize }} weight={500}>
         <div className="flex gap-2 items-center">
            <span className={classNames({ 'order-2': loadingPos == 'left' })}>{children}</span>
            <span className={classNames('animate-spin', { 'hidden': !loading, 'order-1': loadingPos == 'left' })}>
               <AiOutlineLoading3Quarters />
            </span>
         </div>
      </Text>
   );
}

export interface ToolProps extends IconProps, ToolUiControl {
   children: React.ReactNode;
   className?: string;
   loading?: boolean;
   disabled?: boolean;
   modalFor?: string;
   loadingPos?: 'left' | 'right';
   onClick?: (e: React.MouseEvent<HTMLButtonElement> & { set loading(va: boolean); set disabled(v: boolean); }) => void
}

interface ToolUiControl {
   variant?: 'outlined' | 'contained';
   color?: string;
   hover?: string;
   size?: number | 'small',
   small?: boolean;
   bgColor?: ColorType;
   roundness?: StringType
}

interface IconProps {
   icon?: React.ReactNode;
   imgClassName?: string;
   iconClassName?: string;
   pos?: 'left' | 'right';
   imgSize?: StringType
   gap?: number
}

export default Tool