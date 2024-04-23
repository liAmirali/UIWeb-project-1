export function getCurrentDate() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const day = currentDate.getDate();
  const year = currentDate.getFullYear();
  
  // Adding leading zero if day is single digit
  const formattedDay = (day < 10 ? '0' : '') + day;
  
  return `${month} ${formattedDay}, ${year}`;
}