import { useState } from 'react';
import './ErrorButton.scss';

export const ErrorButton = () => {
  const [errorStatus, setErrorStatus] = useState<boolean>(false);

  const handleClick = () => {
    setErrorStatus(true);
  };

  if (errorStatus) {
    throw new Error('Error triggered in ErrorButton');
  }

  return (
    <button className="error-button" onClick={handleClick}>
      error
    </button>
  );
};
