import { Civilization } from 'src/app/models/civilization.model';
import { Technology } from 'src/app/models/technology.model';
import { formatCost } from 'src/app/utils/cost';
function calculateCost(techs: Technology[]): string {
  const cost = {
    wood: 0,
    food: 0,
    gold: 0,
    stone: 0
  };

  techs.forEach(tech => {
    // if the civ doesn't have the tech, move to next tech
    if (!franks[tech.name]) {
      console.log(`franks doesn't have ${tech.name}`);
      return;
    }

    //  Castles cost -25%
    if (tech.name === "castle") {
      cost.food += Math.ceil(tech.cost.food * 0.75);
      cost.wood += Math.ceil(tech.cost.wood * 0.75);
      cost.gold += Math.ceil(tech.cost.gold * 0.75);
      cost.stone += Math.ceil(tech.cost.stone * 0.75);
      return;
    }

    // Mill technologies free
    if (
      tech.name === "horse collar"
      || tech.name === "heavy plow"
      || tech.name === "crop rotation"
    ) {
      return;
    }

    // generic cost
    cost.food += tech.cost.food;
    cost.wood += tech.cost.wood;
    cost.gold += tech.cost.gold;
    cost.stone += tech.cost.stone;
  });

  return formatCost(cost);
}
export const franks: Civilization = {
  calculateCost,
  "name": "franks",
  
  // Archery range
  "archery range": true,
  "archer": true,
  "crossbowman research": true,
  "crossbowman": true,
  "arbalester research": false,
  "arbalester": false,
  "skirmisher": true,
  "elite skirmisher research": true,
  "elite skirmisher": true,
  "hand cannoneer": true,
  "cavalry archer": true,
  "heavy cavalry archer research": true,
  "heavy cavalry archer": true,
  "elephant archer": false,
  "elite elephant archer research": false,
  "elite elephant archer": false,
  "thumb ring": false,
  "parthian tactics": false,

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
  "pikeman research": true,
  "pikeman": true,
  "halberdier research": true,
  "halberdier": true,
  "eagle scout": false,
  "eagle warrior research": false,
  "eagle warrior": false,
  "elite eagle warrior research": false,
  "elite eagle warrior": false,
  "squires": true,
  "arson": true,
  "supplies": true,
  "gambesons": true,

  // Stable
  "stable": true,
  "scout cavalry": true,
  "light cavalry research": true,
  "light cavalry": true,
  "hussar research": false,
  "hussar": false,
  "camel rider": false,
  "heavy camel rider research": false,
  "heavy camel rider": false,
  "knight": true,
  "cavalier research": true,
  "cavalier": true,
  "paladin research": true,
  "paladin": true,
  "battle elephant": false,
  "elite battle elephant research": false,
  "elite battle elephant": false,
  "steppe lancer": false,
  "elite steppe lancer research": false,
  "elite steppe lancer": false,
  "husbandry": true,
  "bloodlines": false,

  // Siege Workshop
  "siege workshop": true,
  "battering ram": true,
  "capped ram research": true,
  "capped ram": true,
  "siege ram research": false,
  "siege ram": false,
  "armored elephant": false,
  "siege elephant research": false,
  "siege elephant": false,
  "mangonel": true,
  "onager research": true,
  "onager": true,
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
  "ring archer armor": false,
  "fletching": true,
  "bodkin arrow": true,
  "bracer": false,
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
  "fast fire ship research": true,
  "fast fire ship": true,
  "transport ship": true,
  "trade cog": true,
  "gillnets": true,
  "cannon galleon research": true,
  "cannon galleon": true,
  "elite cannon galleon research": false,
  "elite cannon galleon": false,
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
  "shipwright": false,
  "fish trap": true,

  // University
  "university": true,
  "masonry": true,
  "architecture": true,
  "fortified wall research": true,
  "chemistry": true,
  "bombard tower research": false,
  "ballistics": true,
  "siege engineers": true,
  "guard tower research": true,
  "keep research": false,
  "heated shot": false,
  "arrowslits": true,
  "murder holes": true,
  "treadmill crane": false,

  // Defensive buildings
  "outpost": true,
  "watch tower": true,
  "guard tower": true,
  "keep": false,
  "bombard tower": false,
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
  "sappers": false,
  "conscription": true,
  "spies": true,

  // Monastery
  "monastery": true,
  "fortified church": false,
  "monk": true,
  "redemption": false,
  "atonement": false,
  "herbal medicine": true,
  "heresy": true,
  "sanctity": true,
  "fervor": true,
  "devotion": true,
  "faith": true,
  "illumination": true,
  "block printing": true,
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
  "two man saw": false,
  "mill": true,
  "farm": true,
  "heavy plow": true,
  "horse collar": true,
  "crop rotation": true,

  // Market
  "market": true,
  "trade cart": true,
  "coinage": true,
  "caravan": true,
  "banking": true,
  "guilds": false,

  // Misc
  "dark age": true,
  "house": true,
  "wonder": true,
}