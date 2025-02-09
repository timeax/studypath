import React from 'react';
import { Outlet } from 'react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import { Base } from '../routes';

const Layout: React.FC<LayoutProps> = ({ routes }) => {
   //--- code here ---- //
   return (
      <div>
         <Header routes={routes} />
         <main>
            <Outlet />

         </main>
         <Footer routes={routes} />
      </div>
   );
}

interface LayoutProps {
   routes: Base[]
}

export default Layout