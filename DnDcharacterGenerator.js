//A Quick DnD 5th edition Character generator
var character = {};

//random Race, subRace has extra space after it so it prints properly
switch(Math.floor((Math.random() * 9)+1)){
    case 1:
      character.Race = "Dwarf";
      if (Math.floor((Math.random() * 2)+1)==1){
        character.subRace = "Mountain ";
      } else {
        character.subRace = "Hill ";
      }
      break;
    case 2:
      character.Race = "Elf";
      var roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        character.subRace = "High ";
      } else if (roll == 2){
        character.subRace = "Wood ";
      } else {
        character.subRace = "Drow ";
      }
      break;
    case 3:
      character.Race = "Halfling";
      if (Math.floor((Math.random() * 2)+1)==1){
        character.subRace = "Lightfoot ";
      } else {
        character.subRace = "Stout ";
      }
      break;
    case 4:
      character.Race = "Human";
      character.subRace ="";
      break;
    case 5:
      character.Race = "Dragonborn";
      var roll=Math.floor((Math.random() * 10)+1);
      if (roll==1){
        character.subRace = "Black ";
      } else if (roll == 2){
        character.subRace = "Blue ";
      } else if (roll == 3){
        character.subRace = "Brass ";
      } else if (roll == 4){
        character.subRace = "Bronze ";
      } else if (roll == 5) {
        character.subRace ="Copper ";
      } else if (roll == 6) {
        character.subRace = "Gold ";
      } else if (roll == 7) {
        character.subRace = "Green ";
      } else if (roll == 8) {
        character.subRace = "Red ";
      } else if (roll == 9) {
        character.subRace = "Silver ";
      } else {
        character.subRace = "White ";
      }
      break;
    case 6:
      character.Race = "Gnome";
      var roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        character.subRace = "Tinker ";
      } else if (roll == 2){
        character.subRace = "Forest ";
      } else {
        character.subRace = "Rock ";
      }
      break;
    case 7:
      character.Race = "Half-Elf";
      character.subRace ="";
      break;
    case 8:
      character.Race = "Half-Orc";
      character.subRace ="";
      break;
    case 9:
      character.Race = "Tiefling"; 
      character.subRace ="";    
}


//random Class
switch(Math.floor((Math.random() * 12)+1)){
    case 1:
      character.Class= "Barbarian";
      break;
    case 2:
      character.Class = "Bard";
      break;
    case 3:
      character.Class = "Cleric";
      break;
    case 4:
      character.Class = "Druid";
      break;
    case 5:
      character.Class = "Fighter";
      break;
    case 6:
      character.Class = "Monk";
      break;
    case 7:
      character.Class = "Paladin";
      break;
    case 8:
      character.Class = "Ranger";
      break;
    case 9:
      character.Class = "Rogue";
      break;
    case 10:
      character.Class ="Sorcerer";
      break;
    case 11:
      character.Class ="Wizard";
      break;
    case 12:
      character.Class = "Warlock";
}

//random background
switch(Math.floor((Math.random() * 13)+1)){
  case 1:
  character.Background = "Acolyte";
  break;
  case 2:
  character.Background = "Charlatan";
  break;
  case 3:
  character.Background = "Criminal";
  break;
  case 4:
  character.Background = "Entertainer";
  break;
  case 5:
  character.Background = "Folk Hero";
  break;
  case 6:
  character.Background = "Guild Artisan";
  break;
  case 7:
  character.Background = "Hermit";
  break;
  case 8:
  character.Background = "Noble";
  break;
  case 9:
  character.Background = "Outlander";
  break;  
  case 10:
  character.Background = "Sage";
  break;
  case 11:
  character.Background = "Sailor";
  break;
  case 12:
  character.Background = "Soldier";
  break;
  case 13:
  character.Background = "Urchin";
  break;
}

//for now console.log, replace with return and call as a function in Full
console.log("You are a"+" "+character.subRace+character.Race+" "+character.Class+" "+"whose background is"+" "+character.Background);