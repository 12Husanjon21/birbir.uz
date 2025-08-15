import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Empty from "./Empty";
import CardsSection from "../../components/CardsSection/CardsSection";

export default function Favourites() {
  return (
    <div className="page-module__page--lr4UP">
      <div className="container-module__container--dFCmu favoriteContainer-module__favorite--A_e2h">
        <div className="favoriteContainer-module__favoritesHeading--r3yTV">
          <h2 className="favoriteContainer-module__sectionTitle--yDSrW headline-module__h2--dAJvt">
            Избранное
          </h2>

          <div className="tabs-module__tabs--OfLd4 favoriteContainer-module__tabs--CZAFI">
            <div className="tabs-module__list--XPvaK">
              <NavLink
                to="/favourites"
                end
                className={({ isActive }) =>
                  isActive
                    ? "tabs-module__trigger--r6q0O"
                    : "tabs-module__trigger--r6q0O"
                }
              >
                Подписки
              </NavLink>
              <NavLink
                to="/favourites/follow"
                className={({ isActive }) =>
                  isActive
                    ? "tabs-module__tab--Z2o2m tabs-module__active--oV2H_"
                    : "tabs-module__tab--Z2o2m"
                }
              >
                Подписчики
              </NavLink>
            </div>
          </div>
        </div>

        <div className="style-module__empty--z2d4E emptyFavorites-module__favoriteEmpty--yNZ0m">
          <Routes>
            <Route path="/" element={<Empty />} />
            <Route path="follow" element={<Empty />} />
          </Routes>
        </div>

        <div className="container-module__container--dFCmu emptyFavorites-module__feedSection--wY00o">
          <h2 className="emptyFavorites-module__sectionTitle--b7xdF headline-module__h2--dAJvt">
            Вам может понравиться
          </h2>
          <CardsSection showTitle={false} />
        </div>
      </div>
    </div>
  );
}
