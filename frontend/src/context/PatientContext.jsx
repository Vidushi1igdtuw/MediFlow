import { createContext, useContext, useState } from "react";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {

  const [patients, setPatients] = useState([
    {
      token: 101,
      name: "Rahul",
      age: 25,
      gender: "Male",
      phone: "9876543210",
      priority: "normal",
      status: "waiting"
    },
    {
      token: 102,
      name: "Priya",
      age: 68,
      gender: "Female",
      phone: "9876543211",
      priority: "senior",
      status: "serving"
    }
  ]);

  return (
    <PatientContext.Provider
      value={{
        patients,
        setPatients
      }}
    >
      {children}
    </PatientContext.Provider>
  );
};

export const usePatients = () => useContext(PatientContext);