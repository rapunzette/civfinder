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
    if (!bulgarians[tech.name]) {
      console.log(`bulgarians doesn't have ${tech.name}`);
      return;
    }

    // Town Centers cost -50% stone
    if (tech.name === "town center") {
      cost.wood += tech.cost.wood;
      cost.food += tech.cost.food;
      cost.gold += tech.cost.gold;
      cost.stone += Math.ceil(tech.cost.stone * 0.5);
      return;
    }

    // Militia-line upgrades free
    if (tech.name === "man at arms research" || tech.name === "long swordsman research" || tech.name === "two handed swordsman research") {
      return;
    }
    // Blacksmith and Siege Workshop technologies cost -50% food
    if (tech.name === "forging"
      || tech.name === "iron casting"
      || tech.name === "blast furnace"
      || tech.name === "scale mail armor"
      || tech.name === "chain mail armor"
      || tech.name === "plate mail armor"
      || tech.name === "fletching"
      || tech.name === "bodkin arrow"
      || tech.name === "bracer"
      || tech.name === "padded archer armor"
      || tech.name === "leather archer armor"
      || tech.name === "ring archer armor"
      || tech.name === "scale barding armor"
      || tech.name === "chain barding armor"
      || tech.name === "plate barding armor"
      || tech.name === "capped ram research"
      || tech.name === "siege ram research"
      || tech.name === "onager research"
      || tech.name === "siege onager research"
      || tech.name === "heavy scorpion research"
    ) {
      cost.food += Math.ceil(tech.cost.food * 0.5);
      cost.wood += tech.cost.wood;
      cost.gold += tech.cost.gold;
      cost.stone += tech.cost.stone;
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
export const bulgarians: Civilization = {
  calculateCost,
  "name": "bulgarians",
 
  // Archery range
  "archery range": true,
  "archer": true,
  "crossbowman research": false,
  "crossbowman": false,
  "arbalester research": false,
  "arbalester": false,
  "skirmisher": true,
  "elite skirmisher research": true,
  "elite skirmisher": true,
  "hand cannoneer": false,
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
  "champion research": false,
  "champion": false,
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
  "hussar research": true,
  "hussar": true,
  "camel rider": false,
  "heavy camel rider research": false,
  "heavy camel rider": false,
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
  "onager research": true,
  "onager": true,
  "siege onager research": true,
  "siege onager": true,
  "scorpion": true,
  "heavy scorpion research": true,
  "heavy scorpion": true,
  "siege tower": true,
  "bombard cannon": false,

  // Blacksmith
  "blacksmith": true,
  "padded archer armor": true,
  "leather archer armor": true,
  "ring archer armor": false,
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
  "elite cannon galleon research": false,
  "elite cannon galleon": false,
  "demolition ship": true,
  "demolition raft": true,
  "heavy demo ship research": false,
  "heavy demo ship": false,
  "galley": true,
  "war galley research": true,
  "war galley": true,
  "galleon research": true,
  "galleon": true,
  "dromon": false,
  "careening": true,
  "dry dock": false,
  "shipwright": false,
  "fish trap": true,

  // University
  "university": true,
  "masonry": true,
  "architecture": true,
  "fortified wall research": false,
  "chemistry": true,
  "bombard tower research": false,
  "ballistics": true,
  "siege engineers": true,
  "guard tower research": true,
  "keep research": true,
  "heated shot": true,
  "arrowslits": false,
  "murder holes": true,
  "treadmill crane": false,

  // Defensive buildings
  "outpost": true,
  "watch tower": true,
  "guard tower": true,
  "keep": true,
  "bombard tower": false,
  "palisade wall": true,
  "palisade gate": true,
  "gate": true,
  "stone wall": true,
  "fortified wall": false,

  // Castle
  "castle": true,
  "petard": true,
  "trebuchet": true,
  "hoardings": false,
  "sappers": false,
  "conscription": true,
  "spies": true,

  // Monastery
  "monastery": true,
  "fortified church": false,
  "monk": true,
  "redemption": true,
  "atonement": false,
  "herbal medicine": true,
  "heresy": true,
  "sanctity": false,
  "fervor": true,
  "devotion": true,
  "faith": false,
  "illumination": true,
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
  "stone shaft mining": true,
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