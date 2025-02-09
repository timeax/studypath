import { routes, Routes } from './routes'
import { Route, Routes as MyRoutes } from 'react-router'
import '@styles/app.scss';

function App() {
  function getRoutes(routes: Routes) {
    return routes.map(route => {
      const Component = route.component;

      if (route.type == 'layout') {
        return (
          //@ts-ignore
          <Route element={<Component />} key={route.id}>
            {getRoutes(route.routes)}
          </Route>
        )
      } else {
        if (route.routes) {
          return (
            //@ts-ignore
            <Route element={Component ? <Component /> : undefined} key={route.id} index={route.index ?? false} path={route.route}>
              {getRoutes(route.routes)}
            </Route>
          )
        }
        //@ts-ignore
        return <Route index={route.index ?? false} key={route.id} path={route.route} element={<Component />} />
      }
    });
  }
  return (
    <>
      <MyRoutes>
        {getRoutes(routes)}
      </MyRoutes>
    </>
  )
}

export default App
