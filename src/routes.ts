import React from "react";
import clientRoutes from "./routes/client";

export interface Base {
   name: string;
   id: string;
   route?: string;
   label: string
   template?: (props: Base) => React.JSX.Element;
   type?: 'route';
   index?: boolean;
   routes?: Base[];
   icon?: React.ReactNode;
   component: any
}

interface Layout {
   component: any;
   routes: Base[];
   type: 'layout';
   id: string
}

export type Route = Layout | Base;


export type Routes = Route[];

export const routes = [
   ...clientRoutes
]