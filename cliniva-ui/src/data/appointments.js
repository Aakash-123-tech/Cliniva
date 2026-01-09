export const appointmentsData = [
  {
    id: 1,
    patientName: "John D...",
    appointmentDate: "02/25/2018",
    time: "09:00",
    email: "john@ex...",
    mobile: "1234567...",
    gender: "female",
    status: "Upcoming",
    address: "123 Elm ...",
    disease: "Fever",
    patientId: "PAT-2024-001",
    fullName: "John Doe",
    age: 45,
    bloodGroup: "A+",
    vitals: {
      temperature: 98.6,
      pulse: 75,
      bloodPressure: "120/80",
      height: 175,
      weight: 75
    }
  },
  {
    id: 2,
    patientName: "Jane S...",
    appointmentDate: "10/02/2024",
    time: "09:00",
    email: "jane@ex...",
    mobile: "0987654...",
    gender: "male",
    status: "Completed",
    address: "456 Oak ...",
    disease: "Fever",
    approved: true,
    patientId: "PAT-2024-002",
    fullName: "Jane Smith",
    age: 32,
    bloodGroup: "B+",
    vitals: {
      temperature: 99.1,
      pulse: 82,
      bloodPressure: "118/78",
      height: 168,
      weight: 65
    }
  },
  {
    id: 3,
    patientName: "Mike J...",
    appointmentDate: "10/03/2024",
    time: "09:00",
    email: "mike@ex...",
    mobile: "5678901...",
    gender: "male",
    status: "Canceled",
    address: "789 Pine ...",
    disease: "",
    canceled: true,
    patientId: "PAT-2024-003",
    fullName: "Mike Johnson",
    age: 28,
    bloodGroup: "O+",
    vitals: {
      temperature: 98.2,
      pulse: 70,
      bloodPressure: "115/75",
      height: 180,
      weight: 82
    }
  },
  {
    id: 4,
    patientName: "Emily ...",
    appointmentDate: "10/04/2024",
    time: "09:00",
    email: "emily@ex...",
    mobile: "3216549...",
    gender: "male",
    status: "Upcoming",
    address: "321 Mapl...",
    disease: "Headache",
    patientId: "PAT-2024-004",
    fullName: "Emily Wilson",
    age: 38,
    bloodGroup: "AB+",
    vitals: {
      temperature: 98.8,
      pulse: 78,
      bloodPressure: "122/82",
      height: 162,
      weight: 58
    }
  },
  {
    id: 5,
    patientName: "Chris L...",
    appointmentDate: "10/05/2024",
    time: "09:00",
    email: "chris@ex...",
    mobile: "4561237...",
    gender: "female",
    status: "Completed",
    address: "654 Birch...",
    disease: "Stomachach",
    patientId: "PAT-2024-005",
    fullName: "Chris Lee",
    age: 52,
    bloodGroup: "A-",
    vitals: {
      temperature: 98.4,
      pulse: 72,
      bloodPressure: "128/85",
      height: 158,
      weight: 62
    }
  },
  {
    id: 6,
    patientName: "Anna B...",
    appointmentDate: "10/06/2024",
    time: "09:00",
    email: "anna@ex...",
    mobile: "6549873...",
    gender: "male",
    status: "Upcoming",
    address: "987 Ceda...",
    disease: "Allergy",
    patientId: "PAT-2024-006",
    fullName: "Anna Brown",
    age: 29,
    bloodGroup: "B-",
    vitals: {
      temperature: 98.7,
      pulse: 76,
      bloodPressure: "119/79",
      height: 165,
      weight: 60
    }
  },
  {
    id: 7,
    patientName: "David ...",
    appointmentDate: "10/07/2024",
    time: "09:00",
    email: "david@ex...",
    mobile: "7891234...",
    gender: "female",
    status: "Canceled",
    address: "159 Waln...",
    disease: "Back Pain",
    patientId: "PAT-2024-007",
    fullName: "David Miller",
    age: 41,
    bloodGroup: "O-",
    vitals: {
      temperature: 98.3,
      pulse: 74,
      bloodPressure: "125/83",
      height: 178,
      weight: 88
    }
  },
  {
    id: 8,
    patientName: "Laura ...",
    appointmentDate: "10/08/2024",
    time: "09:00",
    email: "laura@ex...",
    mobile: "8523697...",
    gender: "female",
    status: "Upcoming",
    address: "753 Ash ...",
    disease: "Anxiety",
    patientId: "PAT-2024-008",
    fullName: "Laura Garcia",
    age: 35,
    bloodGroup: "A+",
    vitals: {
      temperature: 98.9,
      pulse: 80,
      bloodPressure: "121/81",
      height: 160,
      weight: 55
    }
  },
  {
    id: 9,
    patientName: "James...",
    appointmentDate: "10/09/2024",
    time: "09:00",
    email: "james@e...",
    mobile: "9632581...",
    gender: "male",
    status: "Completed",
    address: "852 Elm ...",
    disease: "Sinus Infecti",
    patientId: "PAT-2024-009",
    fullName: "James Martinez",
    age: 48,
    bloodGroup: "B+",
    vitals: {
      temperature: 99.5,
      pulse: 85,
      bloodPressure: "130/88",
      height: 172,
      weight: 78
    }
  },
  {
    id: 10,
    patientName: "Sophia...",
    appointmentDate: "10/10/2024",
    time: "09:00",
    email: "sophia@...",
    mobile: "7418529...",
    gender: "male",
    status: "Upcoming",
    address: "369 Mapl...",
    disease: "Migraine",
    patientId: "PAT-2024-010",
    fullName: "Sophia Anderson",
    age: 26,
    bloodGroup: "AB-",
    vitals: {
      temperature: 98.5,
      pulse: 73,
      bloodPressure: "117/77",
      height: 170,
      weight: 63
    }
  }
];

export const patientDetails = {
  "PAT-2024-001": {
    id: "OP-2024-0156",
    name: "Sarah Johnson",
    patientId: "PAT-2024-001",
    age: 34,
    gender: "Female",
    bloodGroup: "O+",
    vitals: {
      temperature: 101.2,
      pulse: 88,
      bloodPressure: "125/82",
      height: 165,
      weight: 70
    },
    diagnosis: "Anxiety Disorder",
    previousVisits: [
      { date: "08 Jan 2024", type: "OP", tests: "2 tests" },
      { date: "20 Dec 2023", type: "IP", tests: "2 tests" },
      { date: "08 Jan 2024", type: "OP", tests: "3 tests" },
      { date: "20 Dec 2023", type: "IP", tests: "2 tests" }
    ]
  }
};