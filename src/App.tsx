import * as React from 'react';
import { Header, HeadLine, SavingGoal } from './components/index';
import { GlobalStyle } from './styles/globalStyles';

const logo = require('./icons/logo.svg') as string;

const App: React.FunctionComponent = () => {
  return (
    <div>
      <GlobalStyle />
      <Header logo={logo} />
      <HeadLine firstSentence="Let's plan your" boldSentence="saving goal." />
      <SavingGoal />
    </div>
  );
};

export default App;
