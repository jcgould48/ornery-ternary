function isHot(temp) {
return  temp >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.' ;
}
//function isHot(temp) {
//  const weatherReport = temp >=80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.' ;
//  return  weatherReport;
//  }

function helloThere(personName) {
return personName.length <= 5 ? 'Hello, ' + personName : 'Hi, ' + personName;
}

function goodbyeYou(personName) {
return personName ? 'Goodbye, ' + personName : 'Goodbye, stranger';
} 

//function goodbyeYou(personName) {
//  return personName === undefined/*doesn't exist*/ ? 'Goodbye, stranger' : 'Goodbye, ' + personName;
//  return (typeof personName !== 'string')
//} 


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}