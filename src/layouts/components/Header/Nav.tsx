import React from 'react';
import { Base } from '../../../routes';
import { Link } from 'react-router';

const Nav: React.FC<ElementNavProps> = ({ routes }) => {
   //--- code here ---- //
   return (
      <div className="flex items-center">
         {routes.map(item => {
            if (item.route)
               return (
                  <Link className='px-4 first:pl-0 last:pr-0 block' key={item.id} to={item.route as string}>
                     <span>
                        {item.label}
                     </span>
                  </Link>
               )
         })}
      </div>
   );
}

interface ElementNavProps {
   routes: Base[]
}

export default Nav