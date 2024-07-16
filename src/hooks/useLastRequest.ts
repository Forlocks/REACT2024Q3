import { useEffect, useState } from 'react';

export const useLastRequest = (): [string, (value: string) => void] => {
  const [requestData, setRequestData] = useState<string>('');

  useEffect(() => {
    const lastRequest: string = localStorage.getItem('ForlocksAPI') || '';
    setRequestData(lastRequest);
  }, []);

  const updateRequestData = (currentValue: string) => {
    localStorage.setItem('ForlocksAPI', currentValue);
    setRequestData(currentValue);
  };

  return [requestData, updateRequestData];
};
