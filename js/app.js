var firstN = prompt("What is your first name?");
var lastN = prompt("What is your last name?");
console.log(firstN);
alert(`${lastN} is a great last name. Mine is 'Matson' Next I'll ask for your birthday`);
var birthday = prompt("Please enter your birthday", "ex.. 11/22/1992");
var check = confirm(`Please confirm that your birthday is ${birthday}`);
alert(`${firstN} ${lastN} you were born on ${new Date(birthday)}`);
console.log(`${firstN} ${lastN} ${birthday}`);
