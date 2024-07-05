// var generateName = require('sillyname')

// import generateName from 'sillyname'

import gerenateSuperhero from "superheros"

async function printSuperhero() {
    const data = await gerenateSuperhero();
    console.log(`I am ${data}!`);
}
  
printSuperhero();


