import { NavLink } from "react-router-dom"
import { useRouter } from "../hooks/useRouter"
import { Button } from 'primereact/button';
import './Navbar.css'

export const Navbar = () => {
  const routes = useRouter()

  return (
    <nav className="navbar p-menubar p-component">
      <ul className="navbar__list p-menubar-root-list">
        {
          routes.map(({ path, title }) => (
            <li key={path} className="navbar__item p-menuitem">
              <NavLink to={path} className="navbar__link p-menuitem-link">
                {title}
              </NavLink>
            </li>
          ))
        }
      </ul>
      <div className="navbar__actions">
        <Button label="Action" />
      </div>
    </nav>
  )
}
