const chalk = require("chalk");
const { describe } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");
//Customize yargs version
yargs.version("1.1.0");
//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  //options for the command
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true, //title option should be provided while we write the command,by default its false
      type: "string", //by default its boolean, so the type should be string
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
//Remove command
yargs.command({
  command: "remove",
  describe: "removing note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.remove(argv.title);
  },
});

//list command
yargs.command({
  command: "list",
  describe: "Listing all the notes",
  handler: function () {
    notes.list();
  },
});
//reading  command
yargs.command({
  command: "read",
  describe: "Reading a note",
  builder: {
    title: "Note title",
    demandOption: true,
    type: "string",
  },
  handler: function (argv) {
    notes.read(argv.title);
  },
});
yargs.parse();
