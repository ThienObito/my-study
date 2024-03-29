const app = require("./src/app");
const sever = app.listen(3000, () => {
  console.log("Server is running on 3000");
});

process.on('SIGINT', () => {
  sever.close(() => {
    console.log('Exit Sever Express ...');
  });
});