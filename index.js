// give customers a sample is the ride is less than or equal to 400 feet
// charges 20 dollars for a distance between 400 and 2000 feet
// charges 30 dollars for a distance over 2000 feet
// does not allow rides over 2500 feet
function scuberGreetingForFeet(someValue) {
 if (someValue <= 400) {
   return 'This one is on me!'
}
else if (someValue > 400 && someValue <= 2000) {
  return 'That will be twenty bucks.'
}
else if (someValue > 2000 && someValue <= 2500) {
  return 'I will gladly take your thirty bucks.'
}
else if (someValue > 2500) {
  return 'No can do.'
}
}
// returns "Ok, sounds good." when the city is NYC
// should return "No go." if the destination city is not NYC
function ternaryCheckCity(someCity) {
   let result = someCity === 'NYC' ? 'Ok, sounds good.' : 'No go.'
    return result 
}

// should return "Thank you so much." if the tip is generous
// should return "Thank you." if the tip is not as generous
// should return "Bye." if anything else
// how do we know what is generous? 
function switchOnCharmFromTip(tip) {
  let result
    switch(tip) {
     case 'generous' :
       return 'Thank you so much.'
    case 'not as generous' :
      return 'Thank you.'
    default: return 'Bye.'
    }
}