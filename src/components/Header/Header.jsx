import React from "react";
import "../../styles/header.css";
import search from "../../accets/search.png";
import adress from "../../accets/icons9.png";
import user from "../../accets/icon8.png";
import basket from "../../accets/icon10.png";
// import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ setOpenModal, text, setText }) => {
  const token = useSelector((state) => state.application.token);
  // const handkeTockenclear = () => {
  //   localStorage.clear(token);
  //   window.location.reload();
  // };

  return (
    <>
      <header className="header">
        <div className="conainer">
          <nav className="nav-header">
            <div className="burger" onClick={() => setOpenModal(true)}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
            <Link to="/">
              <img className="nav-title" src="" alt="logo" />
            </Link>
            <div className="nav_search">
              <img className="search_icon" src={search} alt="" />
              <input
                className="search_nav"
                type="text"
                placeholder="Я ищу..."
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="navbar">
              <Link to="services/location">
                <div className="navbar-adress">
                  <img src={adress} alt="" className="navbar-img" />
                  <p className="navbar-img-text">Адреса</p>
                </div>
              </Link>
              {!token ? (
                <Link to="/login">
                  <div className="navbar-adress">
                    <p className="navbar-img-text">Войти</p>
                  </div>
                </Link>
              ) : (
                <Link to="/profile">
                  <div className="navbar-adress">
                    <img src={user} alt="" className="navbar-img" />
                    <p className="navbar-img-text">Профиль</p>
                  </div>
                </Link>
              )}
              {token && (
                <>
                  <Link to={`/basket`}>
                    <div className="navbar-adress">
                      <img src={basket} alt="" className="navbar-img" />
                      <p className="navbar-img-text">Корзина</p>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
