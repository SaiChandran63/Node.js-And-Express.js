const os = require("os");

//info about the current user..
const user = os.userInfo();
console.log(user);

//method returns the system upTime in seconds.
console.log(`The system uptime is ${os.uptime()}`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS);
