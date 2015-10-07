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

console.log(character);
//random background

