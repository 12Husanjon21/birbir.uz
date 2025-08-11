import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header-module__header--hUabr">
      <div className="header-module__wrapper--ela7E">
        <div className="container-module__container--dFCmu header-module__container--IRD2P">
          <Link to="/" className="logo-module__logoLink--yADar">
            Logo
          </Link>
          <button
            type="button"
            className="button-module__button--zoKKM button-module__text--RxUvB button-module__medium--Be_AN button-module__shapeRectangle--ObB9e button-module__directionNormal--Q9l5k location-module__locationButton--PpGns"
            data-testid="geo_all_button"
          >
            <span
              className="button-module__buttonIcon--bXiwL"
              aria-hidden="true"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                color="#27383F"
              >
                <g clipPath="url(#find_svg__a)">
                  <path
                    clipRule="evenodd"
                    fillRule="evenodd"
                    d="M19.768 2.693c.956-.344 1.88.58 1.536 1.535l-6.04 16.777c-.375 1.043-1.842 1.063-2.246.03l-2.829-7.228-7.228-2.828c-1.032-.404-1.012-1.871.03-2.247l16.777-6.04z"
                    fill="#27383F"
                  ></path>
                </g>
                <defs>
                  <clipPath id="find_svg__a">
                    <path fill="#fff" d="M0 0h24v24H0z"></path>
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span className="button-module__buttonChildren--hvRdH">
              Все регионы
            </span>
          </button>
          <div className="header-module__headerAside--S8J0z">
            <ul className="header-module__headerMenu--r0w2H style-module__menu--usS4r">
              <li>
                <Link
                  to="/"
                  className="button-module__button--zoKKM button-module__text--RxUvB button-module__medium--Be_AN button-module__shapeRectangle--ObB9e button-module__directionNormal--Q9l5k style-module__link--dnFix"
                >
                  <span className="button-module__buttonChildren--hvRdH">
                    О нас
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="http://www.google.com"
                  className="button-module__button--zoKKM button-module__text--RxUvB button-module__medium--Be_AN button-module__shapeRectangle--ObB9e button-module__directionNormal--Q9l5k style-module__link--dnFix"
                  target="_blank"
                  data-testid="support_button"
                  rel="noopener noreferrer"
                >
                  <span className="button-module__buttonChildren--hvRdH">
                    Поддержка
                  </span>
                </a>
              </li>
            </ul>
            <div>
              <div
                type="button"
                id="radix-:r0:"
                aria-haspopup="menu"
                aria-expanded="false"
                data-state="closed"
                className="dropdown-module__trigger--tnRj0"
              >
                <div className="optionLabel-module__optionLabel--SmGuv">
                  <img
                    src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBjbGlwLXBhdGg9InVybCgjYSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIj4KICAgIDxwYXRoIGQ9Ik0yIDJoMjB2MjBIMlYyWiIgZmlsbD0iI0Y1RjVGNSIvPgogICAgPHBhdGggZD0iTTIgOC42NjhoMjBWMjJIMlY4LjY2OFoiIGZpbGw9IiMwMDM5QTYiLz4KICAgIDxwYXRoIGQ9Ik0yIDE1LjMzMmgyMFYyMkgydi02LjY2OFoiIGZpbGw9IiNENTJCMUUiLz4KICA8L2c+CiAgPHJlY3QgeD0iMS43NSIgeT0iMS43NSIgd2lkdGg9IjIwLjUiIGhlaWdodD0iMjAuNSIgcng9IjEwLjI1IiBzdHJva2U9IiNFOUVDRjEiIHN0cm9rZS13aWR0aD0iLjUiLz4KICA8ZGVmcz4KICAgIDxjbGlwUGF0aCBpZD0iYSI+CiAgICAgIDxyZWN0IHg9IjIiIHk9IjIiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcng9IjEwIiBmaWxsPSIjZmZmIi8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KPC9zdmc+"
                    width="24"
                    height="24"
                    className="style-module__flag--IFLMk"
                    alt=""
                  />
                  RU
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="#a7afbc"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.756 15.695a1.056 1.056 0 01-1.486 0L5.32 9.793a1.043 1.043 0 01-.243-1.145 1.043 1.043 0 01.575-.57 1.059 1.059 0 011.155.24l5.205 5.164 5.205-5.164a1.056 1.056 0 011.474.013 1.039 1.039 0 01.013 1.462l-5.949 5.902z"
                      fill="#a7afbc"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <Link
              to="/"
              className="button-module__button--zoKKM button-module__text--RxUvB button-module__medium--Be_AN button-module__shapeRectangle--ObB9e button-module__directionNormal--Q9l5k header-module__buttonLink--hu8Gv"
              data-testid="favourite_button"
            >
              <span
                className="button-module__buttonIcon--bXiwL"
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#a7afbc"
                >
                  <path
                    d="M11.05 19.146l-.002-.001-.012-.011c-2.587-2.301-4.672-4.159-6.12-5.896-1.44-1.727-2.166-3.241-2.166-4.843 0-2.593 2.07-4.645 4.75-4.645.82 0 1.63.204 2.352.568l.017.009c.51.257.914.461 1.22.6.155.07.303.132.437.177.125.042.293.088.474.088.18 0 .35-.046.474-.088.134-.045.282-.106.437-.177.306-.139.71-.343 1.22-.6l.018-.009A5.238 5.238 0 0116.5 3.75c2.68 0 4.75 2.052 4.75 4.645 0 1.599-.724 3.11-2.159 4.836-1.443 1.735-3.521 3.59-6.1 5.889l-.038.034-.002.001-.117.104c-.332.294-.528.466-.685.573a.676.676 0 01-.133.075l-.014.005-.014-.005a.686.686 0 01-.133-.076c-.156-.107-.352-.28-.683-.575l-.5.559.5-.56-.123-.11z"
                    fill="#fff"
                    stroke="#a7afbc"
                    strokeWidth="1.5"
                  ></path>
                </svg>
              </span>
              <span className="button-module__buttonChildren--hvRdH">
                Избранное
              </span>
            </Link>
            <button
              type="button"
              className="button-module__button--zoKKM button-module__text--RxUvB button-module__medium--Be_AN button-module__shapeRectangle--ObB9e button-module__directionNormal--Q9l5k header-module__entryButton--hpXCC"
              data-testid="buttons_entry"
            >
              <span
                className="button-module__buttonIcon--bXiwL"
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  color="#a7afbc"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 14a5 5 0 014.995 4.783L21 19v2a1 1 0 01-1.993.117L19 21v-2a3 3 0 00-2.824-2.995L16 16H8a3 3 0 00-2.995 2.824L5 19v2a1 1 0 01-1.993.117L3 21v-2a5 5 0 014.783-4.995L8 14h8zM12 2a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"
                    fill="#a7afbc"
                  ></path>
                </svg>
              </span>
              <span className="button-module__buttonChildren--hvRdH">
                Войти
              </span>
            </button>
            <Link
              to="/"
              data-testid="put_button"
              className="button-module__button--zoKKM button-module__secondary--yaBXT button-module__big--KNyAn button-module__shapeRounded--NIFoU button-module__directionReverse--TsnDw header-module__headerLink--sgF0P"
            >
              <span
                className="button-module__buttonIcon--bXiwL"
                aria-hidden="true"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  color="#27383F"
                >
                  <rect width="24" height="24" rx="12" fill="#fff"></rect>
                  <g clipPath="url(#plus-filled_svg__a)">
                    <path
                      d="M11.467 16.266a.533.533 0 001.066 0v-3.733h3.734a.533.533 0 100-1.067h-3.734V7.733a.533.533 0 00-1.066 0v3.733H7.733a.533.533 0 000 1.067h3.734v3.733z"
                      fill="#27383F"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="plus-filled_svg__a">
                      <path fill="#fff" d="M5.6 5.6h12.8v12.8H5.6z"></path>
                    </clipPath>
                  </defs>
                </svg>
              </span>
              <span className="button-module__buttonChildren--hvRdH">
                Поставить
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
