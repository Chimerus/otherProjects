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
 var roll=Math.floor((Math.random() * 8)+1);
    if (roll==1){
        character.Background += "- Blackmailer";
      } else if (roll == 2){
        character.Background += "- Burglar";
      } else if (roll == 3){
        character.Background += "- Enforcer";
      } else if (roll == 4){
        character.Background += "- Fence";
      } else if (roll == 5) {
        character.Background += "- Highway Robber";
      } else if (roll == 6) {
        character.Background += "- Hired Killer";
      } else if (roll == 7) {
        character.Background += "- Pickpocket";
      } else {
        character.Background += "- Smuggler";
      }
  break;
  case 4:
      if (Math.floor((Math.random() * 2)+1)==1){
        character.Background = "Entertainer";   
      var roll=Math.floor((Math.random() * 10)+1);
      if (roll==1){
        character.Background += "- Actor";
      } else if (roll == 2){
        character.Background += "- Dancer";
      } else if (roll == 3){
        character.Background += "- Fire-eater";
      } else if (roll == 4){
        character.Background += "- Jester";
      } else if (roll == 5) {
        character.Background += "- Juggler";
      } else if (roll == 6) {
        character.Background += "- Instrumentalist";
      } else if (roll == 7) {
        character.Background += "- Poet";
      } else if (roll == 8) {
        character.Background += "- Singer";
      } else if (roll == 9) {
        character.Background += "- Storyteller";
      } else {
        character.Background += "- Tumbler";
        }
      } else {
        character.Background = "Gladiator ";
      }
  break;
  case 5:
  character.Background = "Folk Hero";
  break;
  case 6:
  if (Math.floor((Math.random() * 2)+1)==1){
        character.Background = "Guild Artisan";
      } else {
         character.Background = "Guild Merchant";
      }
  break;
  case 7:
    character.Background = "Hermit";
  break;
  case 8:
    if (Math.floor((Math.random() * 2)+1)==1){
        character.Background = "Noble";
      } else {
        character.Background = "Knight";
      }
  break;
  case 9:
    character.Background = "Outlander";
    var roll=Math.floor((Math.random() * 10)+1);
      if (roll==1){
        character.Background += "- Forester";
      } else if (roll == 2){
        character.Background += "- Trapper";
      } else if (roll == 3){
        character.Background += "- Homesteader";
      } else if (roll == 4){
        character.Background += "- Guide";
      } else if (roll == 5) {
        character.Background += "- Exile/Outcast";
      } else if (roll == 6) {
        character.Background += "- Bounty Hunter";
      } else if (roll == 7) {
        character.Background += "- Pilgrim";
      } else if (roll == 8) {
        character.Background += "- Tribal Nomad";
      } else if (roll == 9) {
        character.Background += "- Hunter-Gatherer";
      } else {
        character.Background += "- Tribal Marauder";
        }
  break;  
  case 10:
  character.Background = "Sage";
   var roll=Math.floor((Math.random() * 8)+1);
      if (roll==1){
        character.Background += "- Alchemist";
      } else if (roll == 2){
        character.Background += "- Astronomer";
      } else if (roll == 3){
        character.Background += "- Discredited Academic";
      } else if (roll == 4){
        character.Background += "- Librarian";
      } else if (roll == 5) {
        character.Background += "- Professor";
      } else if (roll == 6) {
        character.Background += "- Researcher";
      } else if (roll == 7) {
        character.Background += "- Wizard's Apprentice";
      } else {
        character.Background += "- Scribe";
      }
  break;
  case 11:
    if (Math.floor((Math.random() * 2)+1)==1){
        character.Background = "Sailor";
      } else {
         character.Background = "Pirate";
      }
  break;
  case 12:
  character.Background = "Soldier";
     var roll=Math.floor((Math.random() * 8)+1);
      if (roll==1){
        character.Background += "- Officer";
      } else if (roll == 2){
        character.Background += "- Scout";
      } else if (roll == 3){
        character.Background += "- Infantry";
      } else if (roll == 4){
        character.Background += "- Calvary";
      } else if (roll == 5) {
        character.Background += "- Healer";
      } else if (roll == 6) {
        character.Background += "- Quartermaster";
      } else if (roll == 7) {
        character.Background += "- Standard Bearer";
      } else {
        character.Background += "- Support Staff (cook,blacksmith,etc.)";
      }
  break;
  case 13:
  character.Background = "Urchin";
  break;
}

//for now console.log, replace with return and call as a function in Full
console.log("You are a"+" "+character.subRace+character.Race+" "+character.Class+" "+"whose background is"+" "+character.Background);