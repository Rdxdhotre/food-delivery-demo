import PropTypes from "prop-types"; // Import PropTypes for validation
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [token, setToken] = useState("");
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    async function loadData() {
      const storedToken = localStorage.getItem("token");
      const storedAdmin = localStorage.getItem("admin");

      if (storedToken) {
        setToken(storedToken);
      }
      if (storedAdmin) {
        setAdmin(JSON.parse(storedAdmin)); // Ensure it's a boolean
      }
    }
    loadData();
  }, []);

  const contextValue = {
    token,
    setToken,
    admin,
    setAdmin,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

// Add prop validation for children
StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Specify that children is required
};

export default StoreContextProvider;
