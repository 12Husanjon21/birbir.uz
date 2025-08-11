import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function Layout({ children }) {
  return (
    <div id="app">
      <div className="layout-module__layout--Fz17i layout-module__primary--gahDf">
        <Header />
        <main className="layout-module__content--r6L4K">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
