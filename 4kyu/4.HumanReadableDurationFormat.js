// function formatDuration(seconds) {
//     let output = ''
//     let detik = 0


//     if (seconds < 60) {
//         output += `${seconds} second`
//     }

//     while (seconds >= 60) {
//         if (seconds > 60) {
//             detik = Math.floor(seconds / 60)
//             output += `and ${detik} minute`
//         } else if (seconds < 3600) {
//             detik = Math.floor(seconds / 3600)
//             output += `${detik} hour,`
//         }

//         if (seconds < 60) {
//             return output
//         }
//     }

//     return output
// }


//CARA KEDUA
function formatDuration(seconds) {
    const time = {
        'minute': 60,
        'hour': 3600,
        'day': 86400,
        'year': 31536000
    };
    let remainingSec, numOfTime, first, second;
    let timeStr = 'second'
    let output = arguments[1] || [];

    if (seconds === 0 && !arguments[1]) {
        return 'now';
    }

    if (seconds === 1) {
        if (arguments[1]) {
            output.push(`1 ${timeStr}`);

            if (output.length > 1) {
                first = output.slice(0, output.length - 1);
                second = output.slice(-1);
                output = first.join(', ');
                output += ` and ${second}`;
                return output;
            }
            return output[0];
        }
        return `1 ${timeStr}`;
    } else if (seconds < time['minute']) {
        if (arguments[1]) {
            if (seconds > 0) {
                output.push(`${seconds} ${timeStr}s`);
            }

            if (output.length > 1) {
                first = output.slice(0, output.length - 1);
                second = output.slice(-1);
                output = first.join(', ');
                output += ` and ${second}`;
                return output;
            }
            return output[0];
        }
        return `${seconds} ${timeStr}s`;
    } else if (seconds >= time['year']) {
        timeStr = 'year';
    } else if (seconds >= time['day']) {
        timeStr = 'day';
    } else if (seconds >= time['hour']) {
        timeStr = 'hour';
    } else if (seconds >= time['minute']) {
        timeStr = 'minute';
    } else {
        console.log('Error!', timeStr);
        return false;
    }

    numOfTime = Math.floor(seconds / time[timeStr]);
    remainingSec = seconds % time[timeStr];

    if (numOfTime === 1 && remainingSec > 0) {
        output.push(`1 ${timeStr}`);
        return formatDuration(remainingSec, output);
    } else if (numOfTime === 1 && remainingSec === 0) {
        output.push(`1 ${timeStr}`);
        return formatDuration(remainingSec, output);
    } else {
        output.push(`${numOfTime} ${timeStr}s`);
        return formatDuration(remainingSec, output);
    }
}

console.log(formatDuration(1), " || 1 second");
console.log(formatDuration(62), " || 1 minute and 2 seconds");
console.log(formatDuration(120), " || 2 minutes");
console.log(formatDuration(3600), " || 1 hour");
console.log(formatDuration(3662), " || 1 hour, 1 minute and 2 seconds");


/*
=====SOAL======
Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/
/*
CARA ORANG LAIN
1. ======>

function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
  
}

2. ======>
3. ======>
*/