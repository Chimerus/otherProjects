//A Quick DnD 5th edition Character generator
//Now Node-ing it!
var charGen = function(){
//Race(and subrace) Class(and main path) & background
var character = {};
//random adjective, for fun
var roll=Math.floor((Math.random() * 6)+1);
switch(roll){
    case 1:
      character.adj = "Fearless";
      break;
    case 2:
      character.adj = "Eloquent";
      break;
    case 3:
      character.adj = "Cunning";
      break;
    case 4:
      character.adj = "Friendly";
      break;
    case 5:
      character.adj = "Stoic";
      break;
    case 6:
      character.adj = "Reckless";
    }
//random Race, subRace has extra space after it so it prints properly
//subrace seperated out so can be expanded on in future
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
          roll=Math.floor((Math.random() * 3)+1);
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
         roll=Math.floor((Math.random() * 10)+1);
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
         roll=Math.floor((Math.random() * 3)+1);
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
//adding Spec for main "path" of class, the big option they get.
switch(Math.floor((Math.random() * 12)+1)){
    case 1:
      character.Class= "Barbarian";
         if (Math.floor((Math.random() * 2)+1)==1){
        character.Spec = "Path of the Berserker";
      } else {
        character.Spec = "Path of the Totem Warrior";
      }
      break;
    case 2:
      character.Class = "Bard";
         if (Math.floor((Math.random() * 2)+1)==1){
        character.Spec = "College of Valor";
      } else {
        character.Spec = "College of Lore";
      }
      break;
    case 3:
      character.Class = "Cleric";
           roll=Math.floor((Math.random() * 7)+1);
          if (roll==1){
        character.Spec = "Knowledge Domain";
      } else if (roll == 2){
        character.Spec = "Life Domain";
      } else if (roll == 3){
        character.Spec = "Light Domain";
      } else if (roll == 4){
        character.Spec = "Nature Domain";
      } else if (roll == 5) {
        character.Spec ="Tempest Domain";
      } else if (roll == 6) {
        character.Spec = "Trickery Domain";
      } else {
        character.Spec = "War Domain";
      }
      break;
    case 4:
      character.Class = "Druid";
      if (Math.floor((Math.random() * 2)+1)==1){
        character.Spec = "Circle of the Moon";
      } else {
        character.Spec = "Circle of the Land";
      }
      break;
    case 5:
      character.Class = "Fighter";
         roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        character.Spec = "Champion";
      } else if (roll == 2){
        character.Spec = "Battle Master";
      } else {
        character.Spec = "Eldritch Knight";
      }
      break;
    case 6:
      character.Class = "Monk";
        roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        character.Spec = "Way of the Open Hand";
      } else if (roll == 2){
        character.Spec = "Way of Shadow";
      } else {
        character.Spec = "Way of the Four Elements";
      }
      break;
    case 7:
      character.Class = "Paladin";
         roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        character.Spec = "Oath of Devotion";
      } else if (roll == 2){
        character.Spec = "Oath of the Ancients";
      } else {
        character.Spec = "Oath of Vengence";
      }
      break;
    case 8:
      character.Class = "Ranger";
       if (Math.floor((Math.random() * 2)+1)==1){
        character.Spec = "Hunter";
      } else {
        character.Spec = "Beastmaster";
      }
      break;
    case 9:
      character.Class = "Rogue";
           roll=Math.floor((Math.random() * 4)+1);
      if (roll==1){
        character.Spec = "Thief";
      } else if (roll == 2){
        character.Spec = "Assassin";
      }  else if (roll == 3){
        character.Spec = "Swashbuckler";
      } else {
        character.Spec = "Arcane Trickster";
      }
    break;
    case 10:
      character.Class ="Sorcerer";
          roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        character.Spec = "Draconic Bloodline";
      } else if (roll == 2){
        character.Spec = "Wild Magic";
      } else {
        character.Spec = "Storm Magic";
      }
      break;
    case 11:
      character.Class ="Wizard";
           roll=Math.floor((Math.random() * 8)+1);
      if (roll==1){
        character.Spec = "Abjuration";
      } else if (roll == 2){
        character.Spec = "Conjuration";
      } else if (roll == 3){
        character.Spec = "Divination";
      } else if (roll == 4){
        character.Spec = "Enchantment";
      } else if (roll == 5) {
        character.Spec ="Evocation";
      } else if (roll == 6) {
        character.Spec = "Illusion";
      } else if (roll == 7) {
        character.Spec = "Necromancy";
      } else {
        character.Spec = "Transmutation";
      }
      break;
    case 12:
      character.Class = "Warlock";
           roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        character.Spec = "Archfey Patron";
      } else if (roll == 2){
        character.Spec = "Fiend Patron";
      } else {
        character.Spec = "Great Old One Patron";
      }
}

//random background
//specialization or variant rolled in
switch(Math.floor((Math.random() * 13)+1)){
  case 1:
  character.Background = "Acolyte";
  break;
  case 2:
  character.Background = "Charlatan";
  break;
  case 3:
  character.Background = "Criminal";
    roll=Math.floor((Math.random() * 8)+1);
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
         roll=Math.floor((Math.random() * 10)+1);
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
       roll=Math.floor((Math.random() * 10)+1);
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
      roll=Math.floor((Math.random() * 8)+1);
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
      roll=Math.floor((Math.random() * 8)+1);
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
  character.Background = "Street Urchin";
  break;
  }
// The final product! 
this.rando = character;
// return character;
}();

// Export it so other things can use it
module.exports.charGen = charGen;


