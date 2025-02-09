import { ft } from '@assets/fn';
import Button from '@components/Button';
import Container from '@components/Container/Container';
import Text from '@components/Text';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaCheckCircle } from 'react-icons/fa';
import banner from '@assets/img/banner-main.png'

const BannerSection: React.FC<BannerSectionProps> = () => {
   //--- code here ---- //
   return (
      <Container section sectionClass='!pb-[10px]'>
         <div className="flex">
            <div className='flex flex-col w-[742px] gap-10'>
               <div className='flex flex-col gap-6'>
                  <Text banner className='leading-[64px] w-[742px]'>
                     Your Bridge to Global Education and Nigerian Talent.
                  </Text>
                  <Text size={ft(18)}>
                     We connect universities around the world with Nigeria's brilliant students, dedicated agents, and rich academic opportunities.
                  </Text>
               </div>
               <Button gap={20} className='!px-6 !py-4 w-fit' iconPos='right' icon={<AiOutlineArrowRight />}>Learn more</Button>

               <div className='flex flex-wrap gap-5'>
                  <Text icon={<FaCheckCircle className='text-success' />}>Lorem ipsum dolor sit amet consectetur.</Text>
                  <Text icon={<FaCheckCircle className='text-success' />}>Lorem ipsum dolor sit amet consectetur.</Text>
                  <Text icon={<FaCheckCircle className='text-success' />}>Lorem ipsum dolor sit amet consectetur.</Text>
                  <Text icon={<FaCheckCircle className='text-success' />}>Lorem ipsum dolor sit amet consectetur.</Text>
               </div>
            </div>
            <div>
               <img className='-top-20 relative' src={banner} width={572} alt="" />
            </div>
         </div>
      </Container>
   );
}

interface BannerSectionProps {

}

export default BannerSection