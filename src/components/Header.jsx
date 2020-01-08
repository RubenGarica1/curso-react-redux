import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import '../assets/styles/components/Header.scss';

const Header = (props) => {
  const { user = {} } = props;
  const hasUser = Object.keys(user).length > 0;

  const hadleLogout = () => {
    props.logoutRequest({});
  };
  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='Platzi Video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {hasUser ? <img src={gravatar(user.email)} alt={user.email} /> : <img src={userIcon} alt="Usuario" />}
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ? <li><Link to='/'>Cuenta</Link></li> : null}
          {hasUser ? <li><a to='#logout' onClick={hadleLogout}>Cerrar session</a></li> : <li><Link to='/login'>iniciar session</Link></li>}
        </ul>
      </div>
    </header>
  );
};

Header.Prototype = {
  user: propTypes.object,
  logoutRequest: propTypes.func,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
