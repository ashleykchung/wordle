//-----------------------------
//#region Database Connection
//-----------------------------
const path = require("path");
const sqlite = require("sqlite3").verbose();
const dbFile = path.join(__dirname, "foo.db");
const db = new sqlite.Database(dbFile, (error) => {
  if (error) return console.error(error.message);
  console.log(`Connected to database ${dbFile}`);
});

const checkGuess = (request, response) => {

  const guess = request.body.guess;
  //for (let i = 0; i < guess.length; i++) {
   // if()
   // guess.charAt
  //}

}


module.exports = {
  checkGuess
};
