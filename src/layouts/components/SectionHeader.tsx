import { ft, showIf } from '@assets/fn';
import Text from '@components/Text';
import { classNames } from 'primereact/utils';
import React from 'react';

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, className, icon, subTitle, subTitleClassName, titleClassName, titleFirst }) => {
   //--- code here ---- //
   return (
      <div className={classNames('flex flex-col gap-6', className)}>
         <Text
            weight={'900 !important'}
            size={ft(38) + ' !important'}
            title
            className={classNames({ 'order-3': !titleFirst }, titleClassName, 'leading-[48px] !normal-case font-title')}>{title}</Text>
         {showIf(subTitle, <Text weight={700} size={ft(18)} upper gap={12} className={classNames({ 'order-1': !titleFirst }, subTitleClassName)} icon={icon}>{subTitle}</Text>)}
      </div>
   );
}

interface SectionHeaderProps {
   title: string;
   subTitle?: string;
   icon?: React.ReactNode;
   className?: string;
   titleClassName?: string;
   subTitleClassName?: string;
   titleFirst?: boolean;
}

export default SectionHeader