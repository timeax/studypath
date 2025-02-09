import Button from '@components/Button';
import Card from '@components/Card';
import Container from '@components/Container/Container';
import Text from '@components/Text';
import SectionHeader from '@layouts/components/SectionHeader';
import CheckedText from '@pages/components/Checked';
import { classNames } from 'primereact/utils';
import React, { PropsWithChildren } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FaHandshakeAngle } from 'react-icons/fa6';
import { RiSchoolFill } from 'react-icons/ri';
import { MdInfo } from 'react-icons/md';
import sample from '@assets/img/sample.png';

const InfoCard: React.FC<PropsWithChildren<InfoCardProps>> = ({ icon, link, title, className, children }) => {
   //--- code here ---- //
   return (
      <>
         <Card className={classNames(className, 'px-3')} header={<Text gap={15} heading icon={icon}>{title}</Text>}>
            <div className='pt-10 mb-4'>
               {children}
            </div>
            <Button size='small' href={link} variant='text' iconPos='right' gap={12} className='text-primary-900 !px-0' icon={<AiOutlineArrowRight />}>Learm more</Button>
         </Card>
      </>
   );
}

interface InfoCardProps {
   link: string;
   title: string;
   icon: React.ReactNode;
   className?: string;
}


const AboutSection: React.FC<AboutSectionProps> = () => {
   //--- code here ---- //
   return (
      <>
         <Container className='!px-0'>
            <div className="grid grid-cols-7">
               <div className='col-span-4 overflow-hidden'>
                  <Container section className='flex flex-col gap-12' sectionClass='bg-primary-50/10'>
                     <SectionHeader
                        icon={<MdInfo />}
                        subTitle='about us'
                        title='We’re passionate about creating life-changing opportunities and opening doors to a global academic future.'
                     />

                     <div className='flex'>
                        <img src={sample} width={321} alt="" />
                        <img src={sample} width={321} alt="" />
                        <img src={sample} width={321} alt="" />
                     </div>
                  </Container>
               </div>

               <div className="col-span-3">
                  <Container section>
                     <div className="space-y-6">
                        <Card header='Our Mission'>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia esse optio quia voluptatibus temporibus provident iste repudiandae ipsam laboriosam!
                        </Card>

                        <Card header='Who we are'>
                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae officia esse optio quia voluptatibus temporibus provident iste repudiandae ipsam laboriosam!
                        </Card>

                        <Card header={<Text heading>What drives us?</Text>} variant='none'>
                           <div className="flex flex-col gap-4">
                              <CheckedText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, doloremque.</CheckedText>
                              <CheckedText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, doloremque.</CheckedText>
                              <CheckedText>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, doloremque.</CheckedText>
                              <CheckedText>Lorem ipsum, dolor sit amet.</CheckedText>
                           </div>
                        </Card>
                     </div>
                  </Container>
               </div>
            </div>
         </Container>

         <Container section>
            <div className='flex flex-col gap-12'>
               <div className='grid grid-cols-2 gap-8'>
                  <div></div>
                  <SectionHeader
                     title='Bringing Students, Universities, and Agents Together Under One Roof.'
                     icon={<FaHandshakeAngle className='text-primary-700' />}
                     subTitle='connections that matter'
                  />
               </div>
               <div className='grid grid-cols-2 gap-12'>
                  <Text text className='!pr-5'>
                     At University Bridges, we believe in the power of connections. That’s why we’ve created a single platform where universities can discover Nigeria’s brightest students, students can find their dream schools, and agents can make impactful academic matches.
                  </Text>
               </div>

               <div className='grid grid-cols-3 gap-8 items-center *:grow'>
                  <InfoCard title='For Institutions' className='!bg-warning-50' icon={<RiSchoolFill className='text-warning' />} link='/'>
                     <div className="flex flex-col gap-4">
                        <CheckedText className='text-warning-800 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                        <CheckedText className='text-warning-800 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                        <CheckedText className='text-warning-800 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                     </div>
                  </InfoCard>

                  <InfoCard className='!bg-danger-50' title='Collaborations' icon={<RiSchoolFill className='text-danger' />} link='/'>
                     <div className="flex flex-col gap-4">
                        <CheckedText className='text-danger-800 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                        <CheckedText className='text-danger-800 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                        <CheckedText className='text-danger-800 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                     </div>
                  </InfoCard>
                  <InfoCard className='!bg-info-50' title='For Agents' icon={<RiSchoolFill className='text-info-700' />} link='/'>
                     <div className="flex flex-col gap-4">
                        <CheckedText className='text-info-700 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                        <CheckedText className='text-info-700 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                        <CheckedText className='text-info-700 mr-1'>Lorem ipsum dolor sit amet consectetur .</CheckedText>
                     </div>
                  </InfoCard>
               </div>
            </div>
         </Container>
      </>
   );
}

interface AboutSectionProps {

}

export default AboutSection