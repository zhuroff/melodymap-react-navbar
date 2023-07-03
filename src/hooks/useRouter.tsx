import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export const useRouter = () => {
  const routeList = useMemo(() => {
    return [
      {
        title: 'Main',
        path: '/',
        element: <Link to="/" />
      },
      {
        title: 'Albums',
        path: '/albums',
        element: <Link to="/albums" />
      },
      // {
      //   path: '/albums/:id',
      //   element: <Link to="/albums/:id" />
      // },
      {
        title: 'Artists',
        path: '/artists',
        element: <Link to="/artists" />
      },
      {
        title: 'Genres',
        path: '/genres',
        element: <Link to="/genres" />
      },
      {
        title: 'Years',
        path: '/years',
        element: <Link to="/years" />
      }
    ]
  }, [])

  const [routes, setRoutes] = useState(routeList)

  useEffect(() => {
    setRoutes(routeList)
  }, [routeList])

  return routes
}