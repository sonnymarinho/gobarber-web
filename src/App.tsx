import React from 'react';

import GlobalStyle from './style/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const App: React.FC = () => {
  return (
    <>
      {/* <SignIn/> */}
      <SignIn />
      <GlobalStyle />
    </>
  );
};

export default App;
