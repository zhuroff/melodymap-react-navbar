import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRouter } from "./hooks/useRouter";
import { Navbar } from "./components/Navbar";

export const Root = (props) => {
  const routes = useRouter()
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}
