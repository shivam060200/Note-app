const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {
  return "Your notes...";
};

//adding notes via cmdline
const addNote = function (title, body) {
  const notes = loadNotes();
  // filter searches entire array even if we have found one duplicate note

  /*const duplicatenotes = notes.filter(function (note) {
    return note.title === title;
  });*/

  //find searches ..and if it find one duplicate array..it doesnt search the entire array
  const duplicatenote = notes.find((note) => note.title === title);
  if (!duplicatenote) {
    notes.push({
      title: title,
      body: body,
    });
    savenotes(notes);
    console.log("New Notes Added");
  } else {
    console.log("Duplicate Notes!!!!!!!!!!");
  }
};
//saving notes to json file
const savenotes = function (notes) {
  const datajson = JSON.stringify(notes); //here notes is an object so its properties and keys are converted to string as it will be stred in JSON
  fs.writeFileSync("notes.json", datajson);
};
//loading notes from json file
const loadNotes = function () {
  try {
    const databuffer = fs.readFileSync("notes.json"); //will be in binary form so,
    const datajson = databuffer.toString(); //converted to string first then,
    return JSON.parse(datajson); //parsed to an object
  } catch (e) {
    return [];
  }
};
//removing notes
const remove = function (title) {
  const notes = loadNotes();
  const notesToNotDelete = notes.filter(function (note) {
    return note.title !== title;
  });

  if (notes.length > notesToNotDelete.length) {
    console.log(chalk.green("Note removed"));
    savenotes(notesToNotDelete);
  } else {
    console.log(chalk.red("Nothing removed"));
  }
};
const list = function () {
  console.log(chalk.inverse.red("Your Notes!"));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.green(note.title));
  });
};
//reading a note
const read = function (title) {
  const notes = loadNotes();
  const readNotes = notes.find((note) => note.title === title);
  if (readNotes) {
    console.log(readNotes.title);
    console.log(readNotes.body);
  } else {
    console.log(chalk.red("Note not found"));
  }
};
module.exports = {
  addNote: addNote,
  remove: remove,
  list: list,
  read: read,
};
