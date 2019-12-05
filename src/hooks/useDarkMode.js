import useLocalStorage from './useLocalStorage';

const useDarkMode = (initialValue) => {
  const [dark, setDark] = useLocalStorage('darkmode', initialValue);

  const element = document.getElementById("App");
  console.log("element =", element);
  if (element) {
    if (dark === true) {
      element.classList.add("dark-mode");
    }
    if (dark === false) {
      element.classList.remove("dark-mode");
    }
  }

  return [dark, setDark];
}


export default useDarkMode;