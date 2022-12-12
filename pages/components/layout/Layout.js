import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Layout(props) {
  return (
    <Fragment>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center bg-green-50">
        {props.children}
      </main>
      <Footer />
    </Fragment>
  );
}
export default Layout;
