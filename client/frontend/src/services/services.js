import { useCallback } from 'react';
import api from "../helpers/api";

export const myProfile = useCallback(async (user_id) => {
  try {
    const res = await api.get(
      `user/my-profile/${user_id}`
    );
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);

export const userAppointments = useCallback(async (user_id) => {
  try {
    const res = await api.get(
      `user/appointments/${user_id}`
    );
    return res.data; // return appointment data( appointment data )
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);

export const createAppointment = useCallback(async (patient_id, doctor_id) => {
  try {
    const res = await api.post(
      `user/patient/create-appointment/${patient_id}/${doctor_id}`
    );
    return res.data; // return appointment_id
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);

export const acceptAppointment = useCallback(async (appointment_id) => {
  try {
    const res = await api.put(
      `user/doctor/accept-appointment/${appointment_id}`,
    );
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);

export const updatePatientRecord = useCallback(async (data, user_id) => {
  try {
    const res = await api.put(
      `user/doctor/update-patient-record/${user_id}`,data // patient_id
    );
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);

export const createPatientRecord = useCallback(async (data, user_id) => {
  try {
    const res = await api.post(
      `user/doctor/create-patient-record/${user_id}`, data // patient_id
    );
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);

export const createRecordRequest = useCallback(async (user_id, appointment_id) => {
  try {
    const res = await api.put(
      `user/doctor/create-record-request/${user_id}/${appointment_id}`,
    );
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);

export const getMyRecord = useCallback(async (user_id) => {
  try {
    const res = await api.get(
      `user/patient/get-my-record/${user_id}` // patient_id
    );
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);

export const sendMyRecord = useCallback(async (data, user_id, appointment_id) => {
  try {
    const res = await api.put(
      `user/patient/send-my-record/${user_id}/${appointment_id}`, // patient_id
      data
    );
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);


export const getPatientRecord = useCallback(async (user_id, appointment_id) => {
  try {
    const res = await api.get(
      `user/doctor/get-patient-record/${user_id}/${appointment_id}` // doctor_id
    );
    return res.data;// patient EHR
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}, []);
