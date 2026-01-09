import React from 'react';
import AppointmentTable from '../components/AppointmentTable';
import { appointmentsData } from '../data/appointments';

const Appointments = () => {
  return <AppointmentTable appointments={appointmentsData} />;
};

export default Appointments;