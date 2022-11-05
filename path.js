const path = require("path");

//Provides the platform-specific path segment separator
console.log(path.sep);

//joins the all path given
const filePath = path.join("/content", "subfolder", "test.txt");
console.log(filePath);

//returns the last portion of a path
const base = path.basename(filePath);
console.log(base);

//path.resolve() will return the absolute path of the current working directory.
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");
console.log(absolute);
