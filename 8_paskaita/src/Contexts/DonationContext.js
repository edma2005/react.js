import { createContext, useState } from "react";

const DonationContext = createContext();

const DonationProvider = ({ children }) => {
  const [donated, setDonated] = useState(false);
  const toggleDonation = () => {
    setDonated(true);
  };

  return (
    <DonationContext.Provider value={{ donated, toggleDonation }}>
      {children}
    </DonationContext.Provider>
  );
};

export { DonationProvider, DonationContext };
