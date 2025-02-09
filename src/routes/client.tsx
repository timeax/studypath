import Layout from "../layouts/Layout";
import Landing from "../pages/Landing";
import { Routes } from "../routes";

const navRoutes: Routes = [
   {
      type: 'route',
      name: 'Home Page',
      label: 'Home',
      id: 'home-page',
      component: Landing,
      index: true,
      route: '/'
   },

   {
      type: 'route',
      name: 'About us',
      label: 'About us',
      id: 'about-page',
      component: Landing,
      index: true,
      route: '/about'
   },
   {
      type: 'route',
      name: 'Services',
      label: 'Services',
      id: 'services-page',
      component: Landing,
      index: true,
      route: '/service'
   },
   {
      type: 'route',
      name: 'Blogs',
      label: 'Blogs',
      id: 'blogs-page',
      component: Landing,
      index: true,
      route: '/'
   },
   // {
   //    type: 'route',
   //    name: '',
   //    label: 'Home',
   //    id: 'home-page',
   //    component: Landing,
   //    index: true,
   //    route: '/'
   // }
]


const clientRoutes: Routes = [
   {
      type: 'layout',
      component: () => <Layout routes={navRoutes as any} />,
      id: 'def-layout',
      routes: [
         ...navRoutes as any
      ]
   }
];



export default clientRoutes;