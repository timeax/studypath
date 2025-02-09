import Container from '@components/Container/Container';
import React, { HTMLInputTypeAttribute, PropsWithChildren, ReactNode, useId } from 'react';
import BannerSection from './sections/landing/Banner';
import Titlebar from '@components/Text/Titlebar';
import Text from '@components/Text';
import AboutSection from './sections/landing/About';
import standford from '@assets/img/logo_black.png'
import SectionHeader from '@layouts/components/SectionHeader';
import { BiHeart } from 'react-icons/bi';
import Button from '@components/Button';
import Card from '@components/Card';
import profile from '@assets/img/profile.png'
import { showIf } from '@assets/fn';
import { classNames } from 'primereact/utils';
import { FaEnvelope } from 'react-icons/fa';



const Review: React.FC<ReviewProps> = ({ img, name, review }) => {
   //--- code here ---- //
   return (
      <Card className='max-w-[458px] !bg-primary-50/20 min-w-[400px]'>
         <div className="flex flex-col gap-6">
            <Text weight={700} text>{name}</Text>
            <div className="flex items-start gap-6">
               <img width={39} src={img} alt="" />
               <Text text>{review}</Text>
            </div>
         </div>
      </Card>
   );
}

interface ReviewProps {
   name: string;
   img: string;
   review?: string
}


const Landing: React.FC<LandingProps> = () => {
   //--- code here ---- //
   return (
      <>
         <BannerSection />
         <section className='bg-primary-950 text-white py-[56px]'>
            <Container>
               <div className='flex justify-between'>
                  {achievements.map(item => <Achievements key={item.title} {...item} />)}
               </div>
            </Container>
         </section>

         <AboutSection />

         <Container section sectionClass='bg-theme-primary text-white'>
            <div className="items-center flex-col flex gap-8">
               <Text weight={'700 !important'}  text>Supported by top Institutions</Text>
               <div className="flex gap-8">
                  {supportedIns.map((item, index) => <img width={80} key={index} src={item} alt="" />)}
               </div>
            </div>
         </Container>

         <Container section className='space-y-16 !px-0' sectionClass='!pb-0'>
            <Container>
               <SectionHeader
                  title='Stories of Impact and Success'
                  subTitle='wall of love'
                  icon={<BiHeart className='text-danger' />}
               />
            </Container>

            <div className='flex flex-col gap-8'>
               <Container>
                  <Card className='!rounded-full !w-fit !bg-primary-50'>
                     <div className='flex gap-1'>
                        <Button className='!bg-transparent !font-extrabold !text-theme-title'>Institutions</Button>
                        <Button>Agents</Button>
                        <Button className='!bg-transparent !font-extrabold !text-theme-title'>Univerities</Button>
                     </div>
                  </Card>
               </Container>
               <Container sectionClass='overflow-x-auto !pt-0 section' section>
                  <div className="flex gap-6 items-center">
                     <Review
                        name='Chomia, Canada'
                        img={profile}
                        review='University Bridges guided me every step of the way. I got into my dream school and even secured a scholarship! I’m now studying Computer Science abroad—thank you for making it happen!'
                     />
                     <Review
                        name='Chomia, Canada'
                        img={profile}
                        review='University Bridges guided me every step of the way. I got into my dream school and even secured a scholarship! I’m now studying Computer Science abroad—thank you for making it happen!'
                     />
                     <Review
                        name='Chomia, Canada'
                        img={profile}
                        review='University Bridges guided me every step of the way. I got into my dream school and even secured a scholarship! I’m now studying Computer Science abroad—thank you for making it happen!'
                     />
                     <Review
                        name='Chomia, Canada'
                        img={profile}
                        review='University Bridges guided me every step of the way. I got into my dream school and even secured a scholarship! I’m now studying Computer Science abroad—thank you for making it happen!'
                     />
                     <Review
                        name='Chomia, Canada'
                        img={profile}
                        review='University Bridges guided me every step of the way. I got into my dream school and even secured a scholarship! I’m now studying Computer Science abroad—thank you for making it happen!'
                     />
                  </div>
               </Container>
            </div>
         </Container>

         <Container section>
            <div>
               <SectionHeader
                  title="Let’s Talk! We’re Here to Help."
                  subTitle='still have questions?'
               // icon={ }
               />
            </div>
            <div className="grid grid-cols-2 gap-12">
               <div className="flex flex-col gap-5">
                  <InputField label='Name' type='text' />
                  <InputField label='Email' type='email' />
                  <InputField label='Message' type='textarea' />
                  <InputField axis='x' labelPos='right' label='I accept the terma' type='checkbox' />
               </div>

               <div className="">
                  <div className='grid grid-cols-2 gap-12'>
                     <Iconbox title='Email' icon={<FaEnvelope />}>
                        Lorem ipsum, dolor sit amet consectetur adipisic
                     </Iconbox>
                     <Iconbox title='Email' icon={<FaEnvelope />}>
                        Lorem ipsum, dolor sit amet consectetur adipisic
                     </Iconbox>
                     <Iconbox title='Email' icon={<FaEnvelope />}>
                        Lorem ipsum, dolor sit amet consectetur adipisic
                     </Iconbox>
                  </div>
               </div>
            </div>
         </Container>
      </>
   );
}


const InputField: React.FC<InputFieldProps> = ({ id: def, name, label, type, axis = 'y', labelPos = 'left', gap }) => {
   //--- code here ---- //
   const id = def ?? useId();
   return (
      <div className={classNames('input', {
         'flex-col items-start': axis == 'y',
         'items-center': axis == 'x',
         'gap-1': gap == undefined
      })}>
         {showIf(label, <label className={classNames({ 'order-2': labelPos == 'right' })} htmlFor={id}>{label}</label>)}
         <div className={classNames({
            'order-1': labelPos == 'right',
            'w-full': axis == 'y' || labelPos == 'left'
         }, 'flex items-center justify-start')}>
            {type == 'textarea' ? <textarea name={name} id={id}></textarea> : <input type={type} name={name} />}
         </div>
      </div>
   );
}


const Iconbox: React.FC<PropsWithChildren<IconboxProps>> = ({ icon, title, children }) => {
   //--- code here ---- //
   return (
      <div className='flex flex-col gap-4'>
         <div className="gap-4 flex flex-col">
            <span>{icon}</span>
            <Text s-header weight={'700 !important'}>{title}</Text>
         </div>
         {children}
      </div>
   );
}

interface IconboxProps {
   title: string;
   icon: ReactNode;
}


interface InputFieldProps {
   id?: string;
   name?: string;
   label: string;
   type?: HTMLInputTypeAttribute | 'textarea';
   axis?: 'x' | 'y';
   labelPos?: 'left' | 'right';
   gap?: number
}


const achievements = [
   {
      title: '$5M+',
      achievement: 'In Scholarships Secured'
   },
   {
      title: '10,000+',
      achievement: 'Nigerian students supported'
   },
   {
      title: '90%',
      achievement: 'Satisfaction rate'
   },
   {
      title: '1,000',
      achievement: 'Verified Agents'
   },

   {
      title: '500+',
      achievement: 'Universities Connected'
   },
];

const supportedIns: string[] = [
   standford,
   standford,
   standford,
   standford,
   standford,
]

const Achievements = ({ title, achievement }: { title: string, achievement: string }) => {
   return <Titlebar className='!gap-0' title={<Text title>{title}</Text>} children={<Text className='text-theme-text' text>{achievement}</Text>} />
}

interface LandingProps {

}

export default Landing