import { Civilization } from 'src/app/models/civilization.model';
import { Cost } from 'src/app/models/cost.model';
import { Technology } from 'src/app/models/technology.model';
import { formatCost } from 'src/app/utils/cost';
function calculateCost(techs: Technology[]): string {

  const cost: Cost = {
    wood: 0,
    food: 0,
    gold: 0,
    stone: 0
  };
  techs.forEach(tech => {
    // if the civ doesn't have the tech, move to next tech
    if (!turks[tech.name]) {
      console.log(`turks doesn't have ${tech.name}`);
      return;
    }
    //  Chemistry free
    if (tech.name === "chemistry") {
      return;
    }

    // researching gunpowder technologies costs -50%
    if (
      tech.name === "bombard tower research"
    ) {
      cost.wood += Math.ceil(tech.cost.wood * 0.5);
      cost.food += Math.ceil(tech.cost.food * 0.5);
      cost.gold += Math.ceil(tech.cost.gold * 0.5);
      cost.stone += Math.ceil(tech.cost.stone * 0.5);
      return;
    }

    // Light Cavalry and Hussar upgrades free
    if (tech.name === "light cavalry research" || tech.name === "hussar research") {
      return;
    }




    // generic cost calculation
    cost.wood += tech.cost.wood;
    cost.food += tech.cost.food;
    cost.gold += tech.cost.gold;
    cost.stone += tech.cost.stone;
  });
  return formatCost(cost);
}
export const turks: Civilization = {
  calculateCost,
  "name": "turks",
  
  // Archery range
  "archery range": true,
  "archer": true,
  "crossbowman research": true,
  "crossbowman": true,
  "arbalester research": false,
  "arbalester": false,
  "skirmisher": true,
  "elite skirmisher research": false,
  "elite skirmisher": false,
  "hand cannoneer": true,
  "cavalry archer": true,
  "heavy cavalry archer research": true,
  "heavy cavalry archer": true,
  "elephant archer": false,
  "elite elephant archer research": false,
  "elite elephant archer": false,
  "thumb ring": true,
  "parthian tactics": true,

  // Barracks
  "barracks": true,
  "militia": true,
  "man at arms research": true,
  "man at arms": true,
  "long swordsman research": true,
  "long swordsman": true,
  "two handed swordsman research": true,
  "two handed swordsman": true,
  "champion research": true,
  "champion": true,
  "spearman": true,
  "pikeman research": false,
  "pikeman": false,
  "halberdier research": false,
  "halberdier": false,
  "eagle scout": false,
  "eagle warrior research": false,
  "eagle warrior": false,
  "elite eagle warrior research": false,
  "elite eagle warrior": false,
  "squires": true,
  "arson": true,
  "supplies": true,
  "gambesons": false,

  // Stable
  "stable": true,
  "scout cavalry": true,
  "light cavalry research": true,
  "light cavalry": true,
  "hussar research": true,
  "hussar": true,
  "camel rider": true,
  "heavy camel rider research": true,
  "heavy camel rider": true,
  "knight": true,
  "cavalier research": true,
  "cavalier": true,
  "paladin research": false,
  "paladin": false,
  "battle elephant": false,
  "elite battle elephant research": false,
  "elite battle elephant": false,
  "steppe lancer": false,
  "elite steppe lancer research": false,
  "elite steppe lancer": false,
  "husbandry": true,
  "bloodlines": true,

  // Siege Workshop
  "siege workshop": true,
  "battering ram": true,
  "capped ram research": true,
  "capped ram": true,
  "siege ram research": true,
  "siege ram": true,
  "armored elephant": false,
  "siege elephant research": false,
  "siege elephant": false,
  "mangonel": true,
  "onager research": false,
  "onager": false,
  "siege onager research": false,
  "siege onager": false,
  "scorpion": true,
  "heavy scorpion research": true,
  "heavy scorpion": true,
  "siege tower": true,
  "bombard cannon": true,

  // Blacksmith
  "blacksmith": true,
  "padded archer armor": true,
  "leather archer armor": true,
  "ring archer armor": true,
  "fletching": true,
  "bodkin arrow": true,
  "bracer": true,
  "forging": true,
  "iron casting": true,
  "blast furnace": true,
  "scale barding armor": true,
  "chain barding armor": true,
  "plate barding armor": true,
  "scale mail armor": true,
  "chain mail armor": true,
  "plate mail armor": true,

  // Dock
  "dock": true,
  "fishing ship": true,
  "fire ship": true,
  "fire galley": true,
  "fast fire ship research": false,
  "fast fire ship": false,
  "transport ship": true,
  "trade cog": true,
  "gillnets": true,
  "cannon galleon research": true,
  "cannon galleon": true,
  "elite cannon galleon research": true,
  "elite cannon galleon": true,
  "demolition ship": true,
  "demolition raft": true,
  "heavy demo ship research": true,
  "heavy demo ship": true,
  "galley": true,
  "war galley research": true,
  "war galley": true,
  "galleon research": true,
  "galleon": true,
  "dromon": false,
  "careening": true,
  "dry dock": true,
  "shipwright": true,
  "fish trap": true,

  // University
  "university": true,
  "masonry": true,
  "architecture": true,
  "fortified wall research": true,
  "chemistry": true,
  "bombard tower research": true,
  "ballistics": true,
  "siege engineers": false,
  "guard tower research": true,
  "keep research": true,
  "heated shot": true,
  "arrowslits": true,
  "murder holes": true,
  "treadmill crane": true,

  // Defensive buildings
  "outpost": true,
  "watch tower": true,
  "guard tower": true,
  "keep": true,
  "bombard tower": true,
  "palisade wall": true,
  "palisade gate": true,
  "gate": true,
  "stone wall": true,
  "fortified wall": true,

  // Castle
  "castle": true,
  "petard": true,
  "trebuchet": true,
  "hoardings": true,
  "sappers": true,
  "conscription": true,
  "spies": true,

  // Monastery
  "monastery": true,
  "fortified church": false,
  "monk": true,
  "redemption": true,
  "atonement": true,
  "herbal medicine": false,
  "heresy": true,
  "sanctity": true,
  "fervor": true,
  "devotion": true,
  "faith": true,
  "illumination": false,
  "block printing": false,
  "theocracy": true,

  // Town Center
  "town center": true,
  "villager": true,
  "loom": true,
  "town watch": true,
  "wheelbarrow": true,
  "town patrol": true,
  "hand cart": true,
  "feudal age": true,
  "castle age": true,
  "imperial age": true,

  // Economy
  "mule cart": false,
  "mining camp": true,
  "gold mining": true,
  "stone mining": true,
  "gold shaft mining": true,
  "stone shaft mining": false,
  "lumber camp": true,
  "double bit axe": true,
  "bow saw": true,
  "two man saw": true,
  "mill": true,
  "farm": true,
  "heavy plow": true,
  "horse collar": true,
  "crop rotation": false,

  // Market
  "market": true,
  "trade cart": true,
  "coinage": true,
  "caravan": true,
  "banking": true,
  "guilds": true,

  // Misc
  "dark age": true,
  "house": true,
  "wonder": true,
}