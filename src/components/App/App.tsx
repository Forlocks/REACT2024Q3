import { ErrorButton } from '../ErrorButton/ErrorButton';
import { Searching } from '../Searching/Searching';
import './App.scss';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

export const App = () => {
  return (
    <ErrorBoundary>
      <div className="app">
        <ErrorButton />
        <Searching />
      </div>
    </ErrorBoundary>
  );
};
