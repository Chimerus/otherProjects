//A Quick DnD 5th edition Character generator
var character = {};

//random Race
switch(Math.floor((Math.random() * 9)+1)){
    case 1:
      character.Race = "Dwarf";
      break;
    case 2:
      character.Race = "Elf";
      break;
    case 3:
      character.Race = "Halfling";
      break;
    case 4:
      character.Race = "Human";
      break;
    case 5:
      character.Race = "Dragonborn";
      break;
    case 6:
      character.Race = "Gnome";
      break;
    case 7:
      character.Race = "Half-Elf";
      break;
    case 8:
      character.Race = "Half-Orc";
      break;
    case 9:
      character.Race = "Tiefling";     
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
console.log("You are a"+" "+character.Race+" "+character.Class+" "+"whose background is"+" "+character.Background);