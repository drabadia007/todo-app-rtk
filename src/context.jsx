import { createContext, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const notify = (type, message) => {
    if (type === "warning") {
      toast.warning(`${message}`);
    } else if (type === "success") {
      toast.success(`${message}`);
    } else if (type === "error") {
      toast.error(`${message}`);
    }
  };

  return (
    <GlobalContext.Provider value={{ notify }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default AppContext;
