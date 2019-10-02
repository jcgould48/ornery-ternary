function isHot(temp) {
return  temp >= 80 ? 'Yes, it is indeed hot.' : 'No, it is not hot.' ;

}


function helloThere(personName) {
return personName.length <= 5 ? 'Hello, ' + personName : 'Hi, ' + personName;
}


function goodbyeYou(personName) {
return personName ? 'Goodbye, ' + personName : 'Goodbye, stranger';
} 


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}