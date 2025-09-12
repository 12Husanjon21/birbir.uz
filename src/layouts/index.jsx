import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { useEffect } from "react";
import { getData, getStorage } from "../utils/utils";
import { login } from "../store/userSlice/UserSlice";
import { useDispatch } from "react-redux";

export default function Layout({ children }) {
  const token = getStorage("JWT", true);
  const dispatch = useDispatch();

  useEffect(() => {
    const response = getData("/api/users/profile");
    response.then((data) => {
      dispatch(login(data));
    })
  }, []);

  return (
    <div id="app">
      <div className="layout-module__layout--Fz17i layout-module__primary--gahDf bg-white">
        <Header />
        <main className="layout-module__content--r6L4K">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
