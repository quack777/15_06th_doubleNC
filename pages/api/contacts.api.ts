import axios from 'axios';

export const getContactData = async () => {
  return axios.get('https://api2.ncnc.app/qa-types');
};
export const getContactQnA = async (id: number) => {
  return axios.get(`https://api2.ncnc.app/qas?qaTypeId=${id}`);
};
