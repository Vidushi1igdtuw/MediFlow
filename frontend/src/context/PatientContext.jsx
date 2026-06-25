import { createContext, useContext, useState, useEffect } from "react";

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {

  const initialData = [
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
      status: "waiting"
    }
  ];

  // ✅ load from localStorage (if exists)
  const [patients, setPatients] = useState(() => {
    const saved = localStorage.getItem("patients");
    return saved ? JSON.parse(saved) : initialData;
  });

  // ✅ SAVE + SYNC STORAGE
  useEffect(() => {
    localStorage.setItem("patients", JSON.stringify(patients));
  }, [patients]);

  // ✅ cross-tab sync (REAL TIME BETWEEN BROWSERS)
  useEffect(() => {
    const sync = (e) => {
      if (e.key === "patients") {
        setPatients(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };

    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  // priority system
  const priorityOrder = {
    emergency: 1,
    senior: 2,
    normal: 3,
  };

  // CALL NEXT PATIENT
  const callNextPatient = () => {
    setPatients((prev) => {

      const waiting = prev
        .filter(p => p.status === "waiting")
        .sort(
          (a, b) =>
            (priorityOrder[a.priority] || 3) -
            (priorityOrder[b.priority] || 3)
        );

      if (waiting.length === 0) return prev;

      const next = waiting[0];

      return prev.map(p => {

        if (p.token === next.token) {
          return { ...p, status: "serving" };
        }

        if (p.status === "serving") {
          return { ...p, status: "completed" };
        }

        return p;
      });
    });
  };

  return (
    <PatientContext.Provider value={{
      patients,
      setPatients,
      callNextPatient,
      priorityOrder
    }}>
      {children}
    </PatientContext.Provider>
  );
};

export const usePatients = () => useContext(PatientContext);