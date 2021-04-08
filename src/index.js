const electron = require('electron');
const settings = require('electron-settings');

var sample = document.getElementById('sample');
var submit = document.getElementById('submit');

//name of the file and the location of the same.
console.log("File used for persisting data --> " + settings.file())

// getting the value from the storage
settings.get('key.data').then(value => {
    console.log("value Persisted --> " +value);
})

// checking for the existence of the value in the storage
settings.has('key1.data').then(bool => {
    console.log("Checking Value Existence --> " + bool);
})

// setting the value in the storage after the submit button is clicked.
submit.addEventListener('click', () => {
    settings.set('key', {
        data: sample.value
    })
})