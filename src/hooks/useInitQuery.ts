import { useEffect, useState } from 'react';

export const useInitQuery = () => {
  const [initQuery, setInitQuery] = useState<string>('');

  useEffect(() => {
    const lastRequest = localStorage.getItem('ForlocksAPI') || '';
    setInitQuery(lastRequest);
  }, []);

  const updateInitQuery = (newRequest: string) => {
    localStorage.setItem('ForlocksAPI', newRequest);
    setInitQuery(newRequest);
  };

  useEffect(() => {
    const lastRequest = localStorage.getItem('ForlocksAPI') || '';
    if (lastRequest !== initQuery) {
      setInitQuery(lastRequest);
    }
  }, [initQuery]);

  return { initQuery, updateInitQuery };
};
