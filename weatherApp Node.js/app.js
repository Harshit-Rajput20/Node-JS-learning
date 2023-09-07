const todaysDate = document.getElementById("date");
const weatherCon = document.getElementById("weathercon");

const tempstatus = "clouds";

const getCurrrentDay = () => {
  let now = new Date();
  let day = now.getTime();
  return day;
};

const getCurrentTime = () => {
  const currentTime = new Date();
  const month = currentTime.getMonth() + 1;
  const date = currentTime.getDate();

  let hour = currentTime.getHours();
  let minute = currentTime.getMinutes();

  let period = "AM";
  if (hour > 11) {
    period = "PM";
    if (hour > 12) {
      hour = hour - 12;
    }
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  return `${month} ${date} | ${hour}:${minute}${period}
   `;
};

const x = getCurrentTime();
todaysDate.innerText = x;
