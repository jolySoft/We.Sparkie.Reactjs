import NavBar from "./navbar";

const Layout = (props) => (
  <div>
      <NavBar/>
      {props.children}
  </div>
);

export default Layout;