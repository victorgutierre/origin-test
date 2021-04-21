import * as React from 'react';
import { Header, HeadLine, SavingGoal } from './components/index';

const App: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <HeadLine />
      <SavingGoal />
    </div>
  );
};

export default App;
