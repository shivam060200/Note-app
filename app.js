const chalk = require('chalk')
const { describe } = require('yargs')
const yargs = require('yargs')
 const getNote= require('./notes.js')
 //Customize yargs version
 yargs.version('1.1.0')
 //create add command
 yargs.command({
     command: 'add',
     describe: 'Add a new note',
     //options for the command
     builder:{
           title: {
                 describe: 'Note Title',
                 demandOption: true, //title option should be provided
                 type: 'string'   //by default its boolean
           },
           body:{
                describe: 'Note body',
                demandOption: true,
                type: 'string'  
           }
     },
     handler: function(argv){
         console.log('Title: ' + argv.title)
         console.log('Body: ' + argv.body)
     }
})
//Remove command
yargs.command({
    command: 'remove',
    describe: 'removing note',
    handler: function(){
        console.log('Removing a note!')
    }
})

//list command
yargs.command({
    command: 'list',
    describe: 'Listing all the notes',
    handler: function(){
        console.log('Listing the notes')
    }
})
//reading a command
yargs.command({
    command: 'read',
    describe: 'Reading a note',
    handler: function(){
        console.log('Reading the note')
    }
})
yargs.parse()