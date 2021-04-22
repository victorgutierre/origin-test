import * as React from 'react';
import { Header, HeadLine, SavingGoal } from './components/index';
import { GlobalStyle } from './styles/globalStyles';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <HeadLine firstSentence="Let's plan your" boldSentence="saving goal." />
      <SavingGoal />
    </div>
  );
};

export default App;
