# Timer

I learned several interesting things about JS and programming at all:

* how to define current date `const currentDate = new Date()`;
* how to define certain date `const startStudyDate = new Date(startStudy)`;
* how to call function regularly `setInterval(count, 1000)`;
* that time is represented in milliseconds and in order to divide them into to seconds/minutes/hours/days we should divide them into 1000/60/60/24;
* to define seconds, minutes, hours and days we should use `const seconds = diff.getSeconds()` or `const minutes = diff.getUTCMinutes()`;
* to round down use `Math.floor` function;
* how to pad a string with another string in the left side `String(seconds).padStart(2, "0")`;
* how to connect elements from html with JS functions: `const minsEl = document.getElementById("mins")`.