//A Quick DnD 5th edition this.Character generator
//Now Node-ing it!
var charGen = function(){
//Race(and subrace) Class(and main path) & background
 this.character = {};
//random adjective, for fun
var roll=Math.floor((Math.random() * 6)+1);
switch(roll){
    case 1:
      this.character.adj = "Fearless";
      break;
    case 2:
      this.character.adj = "Eloquent";
      break;
    case 3:
      this.character.adj = "Cunning";
      break;
    case 4:
      this.character.adj = "Friendly";
      break;
    case 5:
      this.character.adj = "Stoic";
      break;
    case 6:
      this.character.adj = "Reckless";
    }
//random Race, subRace has extra space after it so it prints properly
//subrace seperated out so can be expanded on in future
switch(Math.floor((Math.random() * 9)+1)){
    case 1:
      this.character.Race = "Dwarf";
      if (Math.floor((Math.random() * 2)+1)==1){
        this.character.subRace = "Mountain ";
      } else {
        this.character.subRace = "Hill ";
      }
      break;
    case 2:
      this.character.Race = "Elf";
          roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        this.character.subRace = "High ";
      } else if (roll == 2){
        this.character.subRace = "Wood ";
      } else {
        this.character.subRace = "Drow ";
      }
      break;
    case 3:
      this.character.Race = "Halfling";
      if (Math.floor((Math.random() * 2)+1)==1){
        this.character.subRace = "Lightfoot ";
      } else {
        this.character.subRace = "Stout ";
      }
      break;
    case 4:
      this.character.Race = "Human";
      this.character.subRace ="";
      break;
    case 5:
      this.character.Race = "Dragonborn";
         roll=Math.floor((Math.random() * 10)+1);
      if (roll==1){
        this.character.subRace = "Black ";
      } else if (roll == 2){
        this.character.subRace = "Blue ";
      } else if (roll == 3){
        this.character.subRace = "Brass ";
      } else if (roll == 4){
        this.character.subRace = "Bronze ";
      } else if (roll == 5) {
        this.character.subRace ="Copper ";
      } else if (roll == 6) {
        this.character.subRace = "Gold ";
      } else if (roll == 7) {
        this.character.subRace = "Green ";
      } else if (roll == 8) {
        this.character.subRace = "Red ";
      } else if (roll == 9) {
        this.character.subRace = "Silver ";
      } else {
        this.character.subRace = "White ";
      }
      break;
    case 6:
      this.character.Race = "Gnome";
         roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        this.character.subRace = "Tinker ";
      } else if (roll == 2){
        this.character.subRace = "Forest ";
      } else {
        this.character.subRace = "Rock ";
      }
      break;
    case 7:
      this.character.Race = "Half-Elf";
      this.character.subRace ="";
      break;
    case 8:
      this.character.Race = "Half-Orc";
      this.character.subRace ="";
      break;
    case 9:
      this.character.Race = "Tiefling"; 
      this.character.subRace ="";    
}

//random Class
//adding Spec for main "path" of class, the big option they get.
switch(Math.floor((Math.random() * 12)+1)){
    case 1:
      this.character.Class= "Barbarian";
         if (Math.floor((Math.random() * 2)+1)==1){
        this.character.Spec = "Path of the Berserker";
      } else {
        this.character.Spec = "Path of the Totem Warrior";
      }
      break;
    case 2:
      this.character.Class = "Bard";
         if (Math.floor((Math.random() * 2)+1)==1){
        this.character.Spec = "College of Valor";
      } else {
        this.character.Spec = "College of Lore";
      }
      break;
    case 3:
      this.character.Class = "Cleric";
           roll=Math.floor((Math.random() * 7)+1);
          if (roll==1){
        this.character.Spec = "Knowledge Domain";
      } else if (roll == 2){
        this.character.Spec = "Life Domain";
      } else if (roll == 3){
        this.character.Spec = "Light Domain";
      } else if (roll == 4){
        this.character.Spec = "Nature Domain";
      } else if (roll == 5) {
        this.character.Spec ="Tempest Domain";
      } else if (roll == 6) {
        this.character.Spec = "Trickery Domain";
      } else {
        this.character.Spec = "War Domain";
      }
      break;
    case 4:
      this.character.Class = "Druid";
      if (Math.floor((Math.random() * 2)+1)==1){
        this.character.Spec = "Circle of the Moon";
      } else {
        this.character.Spec = "Circle of the Land";
      }
      break;
    case 5:
      this.character.Class = "Fighter";
         roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        this.character.Spec = "Champion";
      } else if (roll == 2){
        this.character.Spec = "Battle Master";
      } else {
        this.character.Spec = "Eldritch Knight";
      }
      break;
    case 6:
      this.character.Class = "Monk";
        roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        this.character.Spec = "Way of the Open Hand";
      } else if (roll == 2){
        this.character.Spec = "Way of Shadow";
      } else {
        this.character.Spec = "Way of the Four Elements";
      }
      break;
    case 7:
      this.character.Class = "Paladin";
         roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        this.character.Spec = "Oath of Devotion";
      } else if (roll == 2){
        this.character.Spec = "Oath of the Ancients";
      } else {
        this.character.Spec = "Oath of Vengence";
      }
      break;
    case 8:
      this.character.Class = "Ranger";
       if (Math.floor((Math.random() * 2)+1)==1){
        this.character.Spec = "Hunter";
      } else {
        this.character.Spec = "Beastmaster";
      }
      break;
    case 9:
      this.character.Class = "Rogue";
           roll=Math.floor((Math.random() * 4)+1);
      if (roll==1){
        this.character.Spec = "Thief";
      } else if (roll == 2){
        this.character.Spec = "Assassin";
      }  else if (roll == 3){
        this.character.Spec = "Swashbuckler";
      } else {
        this.character.Spec = "Arcane Trickster";
      }
    break;
    case 10:
      this.character.Class ="Sorcerer";
          roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        this.character.Spec = "Draconic Bloodline";
      } else if (roll == 2){
        this.character.Spec = "Wild Magic";
      } else {
        this.character.Spec = "Storm Magic";
      }
      break;
    case 11:
      this.character.Class ="Wizard";
           roll=Math.floor((Math.random() * 8)+1);
      if (roll==1){
        this.character.Spec = "Abjuration";
      } else if (roll == 2){
        this.character.Spec = "Conjuration";
      } else if (roll == 3){
        this.character.Spec = "Divination";
      } else if (roll == 4){
        this.character.Spec = "Enchantment";
      } else if (roll == 5) {
        this.character.Spec ="Evocation";
      } else if (roll == 6) {
        this.character.Spec = "Illusion";
      } else if (roll == 7) {
        this.character.Spec = "Necromancy";
      } else {
        this.character.Spec = "Transmutation";
      }
      break;
    case 12:
      this.character.Class = "Warlock";
           roll=Math.floor((Math.random() * 3)+1);
      if (roll==1){
        this.character.Spec = "Archfey Patron";
      } else if (roll == 2){
        this.character.Spec = "Fiend Patron";
      } else {
        this.character.Spec = "Great Old One Patron";
      }
}

//random background
//specialization or variant rolled in
switch(Math.floor((Math.random() * 13)+1)){
  case 1:
  this.character.Background = "Acolyte";
  break;
  case 2:
  this.character.Background = "Charlatan";
  break;
  case 3:
  this.character.Background = "Criminal";
    roll=Math.floor((Math.random() * 8)+1);
    if (roll==1){
        this.character.Background += "- Blackmailer";
      } else if (roll == 2){
        this.character.Background += "- Burglar";
      } else if (roll == 3){
        this.character.Background += "- Enforcer";
      } else if (roll == 4){
        this.character.Background += "- Fence";
      } else if (roll == 5) {
        this.character.Background += "- Highway Robber";
      } else if (roll == 6) {
        this.character.Background += "- Hired Killer";
      } else if (roll == 7) {
        this.character.Background += "- Pickpocket";
      } else {
        this.character.Background += "- Smuggler";
      }
  break;
  case 4:
      if (Math.floor((Math.random() * 2)+1)==1){
        this.character.Background = "Entertainer";   
         roll=Math.floor((Math.random() * 10)+1);
      if (roll==1){
        this.character.Background += "- Actor";
      } else if (roll == 2){
        this.character.Background += "- Dancer";
      } else if (roll == 3){
        this.character.Background += "- Fire-eater";
      } else if (roll == 4){
        this.character.Background += "- Jester";
      } else if (roll == 5) {
        this.character.Background += "- Juggler";
      } else if (roll == 6) {
        this.character.Background += "- Instrumentalist";
      } else if (roll == 7) {
        this.character.Background += "- Poet";
      } else if (roll == 8) {
        this.character.Background += "- Singer";
      } else if (roll == 9) {
        this.character.Background += "- Storyteller";
      } else {
        this.character.Background += "- Tumbler";
        }
      } else {
        this.character.Background = "Gladiator ";
      }
  break;
  case 5:
  this.character.Background = "Folk Hero";
  break;
  case 6:
  if (Math.floor((Math.random() * 2)+1)==1){
        this.character.Background = "Guild Artisan";
      } else {
         this.character.Background = "Guild Merchant";
      }
  break;
  case 7:
    this.character.Background = "Hermit";
  break;
  case 8:
    if (Math.floor((Math.random() * 2)+1)==1){
        this.character.Background = "Noble";
      } else {
        this.character.Background = "Knight";
      }
  break;
  case 9:
    this.character.Background = "Outlander";
       roll=Math.floor((Math.random() * 10)+1);
      if (roll==1){
        this.character.Background += "- Forester";
      } else if (roll == 2){
        this.character.Background += "- Trapper";
      } else if (roll == 3){
        this.character.Background += "- Homesteader";
      } else if (roll == 4){
        this.character.Background += "- Guide";
      } else if (roll == 5) {
        this.character.Background += "- Exile/Outcast";
      } else if (roll == 6) {
        this.character.Background += "- Bounty Hunter";
      } else if (roll == 7) {
        this.character.Background += "- Pilgrim";
      } else if (roll == 8) {
        this.character.Background += "- Tribal Nomad";
      } else if (roll == 9) {
        this.character.Background += "- Hunter-Gatherer";
      } else {
        this.character.Background += "- Tribal Marauder";
        }
  break;  
  case 10:
  this.character.Background = "Sage";
      roll=Math.floor((Math.random() * 8)+1);
      if (roll==1){
        this.character.Background += "- Alchemist";
      } else if (roll == 2){
        this.character.Background += "- Astronomer";
      } else if (roll == 3){
        this.character.Background += "- Discredited Academic";
      } else if (roll == 4){
        this.character.Background += "- Librarian";
      } else if (roll == 5) {
        this.character.Background += "- Professor";
      } else if (roll == 6) {
        this.character.Background += "- Researcher";
      } else if (roll == 7) {
        this.character.Background += "- Wizard's Apprentice";
      } else {
        this.character.Background += "- Scribe";
      }
  break;
  case 11:
    if (Math.floor((Math.random() * 2)+1)==1){
        this.character.Background = "Sailor";
      } else {
         this.character.Background = "Pirate";
      }
  break;
  case 12:
  this.character.Background = "Soldier";
      roll=Math.floor((Math.random() * 8)+1);
      if (roll==1){
        this.character.Background += "- Officer";
      } else if (roll == 2){
        this.character.Background += "- Scout";
      } else if (roll == 3){
        this.character.Background += "- Infantry";
      } else if (roll == 4){
        this.character.Background += "- Calvary";
      } else if (roll == 5) {
        this.character.Background += "- Healer";
      } else if (roll == 6) {
        this.character.Background += "- Quartermaster";
      } else if (roll == 7) {
        this.character.Background += "- Standard Bearer";
      } else {
        this.character.Background += "- Support Staff (cook,blacksmith,etc.)";
      }
  break;
  case 13:
  this.character.Background = "Street Urchin";
  break;
  }
// The final product! 
// this.this.character = this.character;
return this.character;
}();

// Export it so other things can use it
module.exports.charGen = charGen;


