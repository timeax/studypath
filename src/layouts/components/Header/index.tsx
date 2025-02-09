import React from 'react';
import { Base } from '../../../routes';
import Text from '@components/Text';
import Container from '@components/Container/Container';
// import logo from '@assets/img/logo.png'
import styles from '@styles/header.module.scss';
import Button from '@components/Button';
import Nav from './Nav';
// import { ft } from '@assets/fn';

const Header: React.FC<HeaderProps> = ({ routes }) => {
   //--- code here ---- //
   return (
      <header className={styles.main}>
         <Container>
            <div className="flex items-center justify-between">
               <Text className={styles.title}>Univer</Text>
               <Nav routes={routes} />

               <div>
                  <Button href='/contact-us' bgColor='primary'>Contact us</Button>
               </div>
            </div>
         </Container>
      </header>
   );
}

interface HeaderProps {
   routes: Base[];
}

export default Header