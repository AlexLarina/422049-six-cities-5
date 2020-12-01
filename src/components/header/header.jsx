import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {AuthorizationStatus} from "../../lib/const.js";
import {redirectToRoute} from "../../store/action.js";

const Header = (props) => {
  const {userData, authorizationStatus, onSignInClick, onAuthUserClick} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="/">
              <img className="header__logo" src="../img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {authorizationStatus === AuthorizationStatus.NO_AUTH ?
                    <span className="header__login" onClick={onSignInClick}>Sign in</span> :
                    <span className="header__user-name user__name" onClick={onAuthUserClick}>{userData.email}</span>
                  }
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string,
  onSignInClick: PropTypes.func.isRequired,
  onAuthUserClick: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    email: PropTypes.string
  }),
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  userData: USER.userData
});

const mapDispatchToProps = (dispatch) => ({
  onSignInClick() {
    dispatch(redirectToRoute(`/login`));
  },
  onAuthUserClick() {
    dispatch(redirectToRoute(`/favorites`));
  }
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
