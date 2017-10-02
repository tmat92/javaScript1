var name = prompt('Hello there! What is your name?')
console.log(name)
var favColor = prompt(name + ", whats your favorite color?", "ie.. red, orange, yellow, green, blue, pink, purple, black, white, grey")
console.log(favColor)
switch (favColor) {
	case 'red':
   alert(name +'Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love.');
    break;
  case 'orange':
    alert(name + ', Orange combines the energy of red and the happiness of yellow. It is associated with joy, sunshine, and the tropics. Orange represents enthusiasm, fascination, happiness, creativity, determination, attraction, success, encouragement, and stimulation.');
    break;
  case 'yellow':
    alert(name + ', Yellow is the color of sunshine. It is associated with joy, happiness, intellect, and energy.');
    break;
  case 'green':
    alert(name + ', Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility. Green has strong emotional correspondence with safety. Dark green is also commonly associated with money.');
    break;
  case 'blue':
  	alert(name + ', Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven.');
    break;
  case 'pink':
    alert(name + ', Pink represents compassion, nurturing and love. It relates to unconditional love and understanding, and the giving and receiving of nurturing.');
    break;
  case 'purple':
  	alert(name + ', Purple combines the stability of blue and the energy of red. Purple is associated with royalty. It symbolizes power, nobility, luxury, and ambition. It conveys wealth and extravagance. Purple is associated with wisdom, dignity, independence, creativity, mystery, and magic.');
  	break;
  case 'black':
  	alert(name + ', Black is associated with power, elegance, formality, death, evil, and mystery.');
  	break;
  case 'white':
  	alert(name + ', White is associated with light, goodness, innocence, purity, and virginity. It is considered to be the color of perfection.');
  	break;
  case 'grey':
  	alert(name + ', Gray is a cool, neutral, and balanced color. The color gray is an emotionless, moody color that is typically associated with meanings of dull, dirty, and dingy, as well as formal, conservative, and sophisticated.');
  	break;
  default:
    alert('Sorry, thats not a valid option');
}
