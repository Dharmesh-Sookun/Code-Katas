/* 
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable 
format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. 
*/

function humanReadable(seconds) {
  let readableTime = "";

  if (seconds < 60) {
    if (seconds < 10) {
      readableTime = "00:00:0" + seconds;
    } else {
      readableTime = "00:00:" + seconds;
    }
  } else if (seconds < 3600) {
    if (seconds % 60 == 0) {
      if (seconds / 60 < 10) {
        readableTime = "00:0" + seconds / 60 + ":00";
      } else {
        readableTime = "00:" + seconds / 60 + ":00";
      }
    } else {
      let minutes = Math.floor(seconds / 60);
      let secondsLeft = seconds % 60;

      if (minutes < 10) {
        if (secondsLeft < 10) {
          readableTime = "00:0" + minutes + ":0" + secondsLeft;
        } else {
          readableTime = "00:0" + minutes + ":" + secondsLeft;
        }
      } else {
        if (secondsLeft < 10) {
          readableTime = "00:" + minutes + ":0" + secondsLeft;
        } else {
          readableTime = "00:" + minutes + ":" + secondsLeft;
        }
      }
    }
  } else {
    if (seconds % 3600 == 0) {
      if (seconds / 3600 < 10) {
        readableTime = "0" + seconds / 3600 + ":00:00";
      } else {
        readableTime = seconds / 3600 + ":00:00";
      }
    } else {
      let hours = Math.floor(seconds / 3600);
      let minuteLeft = Math.floor((seconds - hours * 3600) / 60);
      let secondsLeft = Math.round(
        ((seconds - hours * 3600) / 60 - minuteLeft) * 60
      );
      let hoursDisplay = "";
      let minuteDisplay = "";
      let secondDisplay = "";

      if (hours < 10) {
        hoursDisplay = "0" + hours;
      } else {
        hoursDisplay = hours + "";
      }

      if (minuteLeft < 10) {
        minuteDisplay = "0" + minuteLeft;
      } else {
        minuteDisplay = minuteLeft + "";
      }

      if (secondsLeft < 10) {
        secondDisplay = "0" + secondsLeft;
      } else {
        secondDisplay = secondsLeft + "";
      }

      readableTime = hoursDisplay + ":" + minuteDisplay + ":" + secondDisplay;
    }
  }
  return readableTime;
}

console.log(humanReadable(45296));
