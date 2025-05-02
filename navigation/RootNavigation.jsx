import React from 'react';
import {useSelector} from 'react-redux';
import {Authenticated, Unauthenticated} from './MainNavigation';

const RootNavigation = () => {
  const user = useSelector(state => state.user);
  return user.isLoggedIn ? <Authenticated /> : <Unauthenticated />;
};

export default RootNavigation;
