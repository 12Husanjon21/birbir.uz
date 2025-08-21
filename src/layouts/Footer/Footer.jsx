import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer-module__footer--fluC0">
      <div className="container-module__container--dFCmu">
        <div className="footer-module__footerContent--sbxac">
          <div>
            <ul className="footer-module__topMenu--Vcnzu style-module__menu--usS4r">
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
                  href="http://google.com"
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
              <li>
                <Link
                  to="/regions"
                  className="button-module__button--zoKKM button-module__text--RxUvB button-module__medium--Be_AN button-module__shapeRectangle--ObB9e button-module__directionNormal--Q9l5k style-module__link--dnFix"
                >
                  <span className="button-module__buttonChildren--hvRdH">
                    Все регионы
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/legal"
                  className="button-module__button--zoKKM button-module__text--RxUvB button-module__medium--Be_AN button-module__shapeRectangle--ObB9e button-module__directionNormal--Q9l5k style-module__link--dnFix"
                >
                  <span className="button-module__buttonChildren--hvRdH">
                    Правила платформы
                  </span>
                </Link>
              </li>
            </ul>
            <ul className="footer-module__footerSocial--QnVef style-module__linksList--iukZI">
              <li>
                <a
                  href="https://www.instagram.com/birbir.uz"
                  data-testid="instagram_link"
                  className="style-module__link--lNRv7 footer-module__footerSocialLink--rhMyo footer-module__primary--aYwAm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#27383F"
                  >
                    <path
                      d="M10 7.088A2.915 2.915 0 007.088 10c0 1.6 1.312 2.912 2.912 2.912 1.6 0 2.912-1.312 2.912-2.912 0-1.6-1.312-2.912-2.912-2.912zM18.75 10c0-1.213 0-2.4-.063-3.612-.062-1.4-.387-2.65-1.412-3.663-1.025-1.025-2.262-1.35-3.662-1.413C12.4 1.25 11.213 1.25 10 1.25s-2.4 0-3.612.063c-1.4.062-2.65.387-3.663 1.412C1.7 3.75 1.375 4.987 1.312 6.388 1.25 7.6 1.25 8.787 1.25 10s0 2.4.063 3.613c.062 1.4.387 2.65 1.412 3.662 1.025 1.025 2.262 1.35 3.663 1.413 1.212.062 2.4.062 3.612.062 1.213 0 2.4 0 3.613-.063 1.4-.062 2.65-.387 3.662-1.412 1.025-1.025 1.35-2.262 1.413-3.662.075-1.2.062-2.4.062-3.613zM10 14.488c-2.487 0-4.487-2-4.487-4.488 0-2.487 2-4.487 4.487-4.487 2.488 0 4.488 2 4.488 4.487 0 2.488-2 4.488-4.488 4.488zm4.675-8.113c-.575 0-1.05-.463-1.05-1.05 0-.588.463-1.05 1.05-1.05s1.05.462 1.05 1.05a1 1 0 01-.3.737 1 1 0 01-.738.3l-.012.013z"
                      fill="#27383F"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/birbir_uz"
                  data-testid="telegram_link"
                  className="style-module__link--lNRv7 footer-module__footerSocialLink--rhMyo footer-module__primary--aYwAm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#27383F"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19.777 4.43a1.5 1.5 0 012.062 1.626L19.57 19.813c-.22 1.327-1.676 2.088-2.893 1.427-1.018-.553-2.53-1.405-3.89-2.294-.68-.445-2.763-1.87-2.507-2.884C10.5 15.195 14 11.937 16 10c.785-.761.427-1.2-.5-.5-2.302 1.738-5.998 4.381-7.22 5.125-1.078.656-1.64.768-2.312.656-1.226-.204-2.363-.52-3.291-.905-1.254-.52-1.193-2.244-.001-2.746l17.1-7.2z"
                      fill="#27383F"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/people/Bir-Bir-%D0%BE%D0%B1%D1%8A%D1%8F%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2-%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%D0%B5/61565648775523/"
                  data-testid="facebook_link"
                  className="style-module__link--lNRv7 footer-module__footerSocialLink--rhMyo footer-module__primary--aYwAm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="#27383F"
                  >
                    <path
                      d="M11.667 11.25h2.083l.833-3.333h-2.916V6.25c0-.859 0-1.667 1.666-1.667h1.25v-2.8a23.474 23.474 0 00-2.38-.116c-2.263 0-3.87 1.38-3.87 3.916v2.333h-2.5v3.334h2.5v7.083h3.334V11.25z"
                      fill="#27383F"
                    ></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/birbir/"
                  data-testid="linkedin_link"
                  className="style-module__link--lNRv7 footer-module__footerSocialLink--rhMyo footer-module__primary--aYwAm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    color="#27383F"
                  >
                    <path
                      d="M16.5 1.5a6 6 0 016 6v9a6 6 0 01-6 6h-9a6 6 0 01-6-6v-9a6 6 0 016-6h9zM7.333 9.667a1.166 1.166 0 00-1.166 1.166v5.834a1.166 1.166 0 002.333 0v-5.834a1.166 1.166 0 00-1.167-1.166zm3.5-1.167a1.166 1.166 0 00-1.166 1.167v7a1.166 1.166 0 002.333 0v-2.26c0-1.295.434-2.66 1.625-3.169.388-.165.973-.233 1.379-.105a.643.643 0 01.342.22c.06.081.154.263.154.647v4.667a1.166 1.166 0 002.333 0V12c0-.782-.198-1.476-.611-2.034a2.964 2.964 0 00-1.518-1.059c-1.052-.33-2.218-.147-2.996.187-.363.155-.824-.07-1.127-.323a1.168 1.168 0 00-.748-.271zm-3.5-2.333a1.166 1.166 0 100 2.332 1.166 1.166 0 000-2.332z"
                      fill="#27383F"
                    ></path>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}
