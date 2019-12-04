import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  // Set state prop, capture values. If local, use that.
  // Otherwise, use initial data.
  // update localStorage when needed
  // don't forget to parse data from localStorage and stringify new data if JSON
  const [storedValue, setStoredValue] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return JSON.parse(window.localStorage.getItem(key));
    }
    window.localStorage.setItem(JSON.stringify(initialValue));
    return initialValue;
  });

  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue];
};

export default useLocalStorage;