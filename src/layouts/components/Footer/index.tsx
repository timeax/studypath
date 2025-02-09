import Container from '@components/Container/Container';
import Text from '@components/Text';
import React from 'react';
import styles from '@styles/header.module.scss';
import Card from '@components/Card';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';
import { Base } from '../../../routes';
import Nav from '../Header/Nav';

const Footer: React.FC<FooterProps> = ({ routes }) => {
   //--- code here ---- //
   return (
      <footer className={styles.footer}>
         <Container>
            <div className='space-y-4'>
               <div className='flex items-start flex-col'>
                  <Text className={styles.title}>Univer</Text>
                  <Text text>Your Bridge to Global Opportunities</Text>
               </div>
               <div>
                  <Card className='!bg-theme-bgColor text-theme-text'>
                     <div className="flex gap-3 items-center">
                        {socialLinks.map(item => {
                           return <a key={item.link} className={styles.social} target='_blank' href={item.link}>{item.icon}</a>
                        })}
                     </div>
                  </Card>
               </div>

               <div className='my-12'>
                  <Nav routes={routes} />
               </div>

               <div>
                  <hr className='!my-8' />
                  <div className="flex justify-center items-center gap-8">
                     <Text>2025 Univer. All rights reserved.</Text>

                  </div>
               </div>
            </div>
         </Container>
      </footer>
   );
}

interface SocialLinks {
   icon: React.ReactNode;
   link: string;
   title?: string
}

const socialLinks: SocialLinks[] = [
   {
      icon: <FaFacebook />,
      link: '/'
   },
   {
      icon: <FaInstagram />,
      link: '/i'
   },
   {
      icon: <FaXTwitter />,
      link: '/x'
   }, {
      icon: <FaLinkedin />,
      link: '/l'
   }, {
      icon: <FaYoutube />,
      link: '/y'
   }
]

interface FooterProps {
   routes: Base[]
}

export default Footer