const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// -------------------- FAKE DATABASE --------------------
let patients = [
  { token: 101, name: "Rahul", status: "waiting" },
  { token: 102, name: "Priya", status: "serving" },
  { token: 103, name: "Amit", status: "waiting" },
];

// -------------------- HOME --------------------
app.get("/", (req, res) => {
  res.send("MediFlow Fake Backend Running 🚀");
});

// -------------------- GET PATIENTS --------------------
app.get("/patients", (req, res) => {
  res.json(patients);
});

// -------------------- ADD PATIENT --------------------
app.post("/addPatient", (req, res) => {
  const { name } = req.body;

  const newToken =
    patients.length > 0
      ? patients[patients.length - 1].token + 1
      : 101;

  const newPatient = {
    token: newToken,
    name,
    status: "waiting",
  };

  patients.push(newPatient);

  res.json(newPatient);
});

// -------------------- CALL NEXT PATIENT --------------------
app.put("/callNext", (req, res) => {
  const currentIndex = patients.findIndex(p => p.status === "serving");

  if (currentIndex !== -1) {
    patients[currentIndex].status = "completed";
  }

  const nextIndex = patients.findIndex(p => p.status === "waiting");

  if (nextIndex !== -1) {
    patients[nextIndex].status = "serving";
  }

  res.json({
    message: "Next patient called",
    patients,
  });
});

// -------------------- START SERVER --------------------
app.listen(5000, () => {
  console.log("Fake Backend Running on Port 5000 🚀");
});