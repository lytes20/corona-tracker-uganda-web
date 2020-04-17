import moment from 'moment';

export const convertStrToDate = (strDate) => {
  let formattedDate = moment(strDate, 'YYYY-MM-DD HH:mm').toDate();
  let dateString: string;
  dateString = moment(formattedDate).format('DD/MM/YYYY, HH:mm');
  return dateString;
};
