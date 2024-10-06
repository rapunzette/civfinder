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
    if (!incas[tech.name]) {
      console.log(`incas doesn't have ${tech.name}`);
      return;
    }

    // Buildings cost -15% stone
    if (
      tech.name === "town center"
      || tech.name === "castle"
      || tech.name === "outpost"
      || tech.name === "watch tower"
      || tech.name === "guard tower"
      || tech.name === "keep"
      || tech.name === "stone wall"
      || tech.name === "fortified wall"
      || tech.name === "gate"
    ) {
      cost.food += tech.cost.food
      cost.gold += tech.cost.gold
      cost.wood += tech.cost.wood;
      cost.stone += Math.ceil(tech.cost.stone * 0.85);
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

export const incas: Civilization = {
  calculateCost,
  "name": "incas",
  
  // Archery range
  "archery range": true,
  "archer": true,
  "crossbowman research": true,
  "crossbowman": true,
  "arbalester research": true,
  "arbalester": true,
  "skirmisher": true,
  "elite skirmisher research": true,
  "elite skirmisher": true,
  "hand cannoneer": false,
  "cavalry archer": false,
  "heavy cavalry archer research": false,
  "heavy cavalry archer": false,
  "elephant archer": false,
  "elite elephant archer research": false,
  "elite elephant archer": false,
  "thumb ring": true,
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
  "eagle scout": true,
  "eagle warrior research": true,
  "eagle warrior": true,
  "elite eagle warrior research": true,
  "elite eagle warrior": true,
  "squires": true,
  "arson": true,
  "supplies": false,
  "gambesons": false,

  // Stable
  "stable": false,
  "scout cavalry": false,
  "light cavalry research": false,
  "light cavalry": false,
  "hussar research": false,
  "hussar": false,
  "camel rider": false,
  "heavy camel rider research": false,
  "heavy camel rider": false,
  "knight": false,
  "cavalier research": false,
  "cavalier": false,
  "paladin research": false,
  "paladin": false,
  "battle elephant": false,
  "elite battle elephant research": false,
  "elite battle elephant": false,
  "steppe lancer": false,
  "elite steppe lancer research": false,
  "elite steppe lancer": false,
  "husbandry": false,
  "bloodlines": false,

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
  "siege onager research": false,
  "siege onager": false,
  "scorpion": true,
  "heavy scorpion research": true,
  "heavy scorpion": true,
  "siege tower": true,
  "bombard cannon": false,

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
  "scale barding armor": false,
  "chain barding armor": false,
  "plate barding armor": false,
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
  "cannon galleon": false,
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
  "dry dock": true,
  "shipwright": true,
  "fish trap": true,

  // University
  "university": true,
  "masonry": true,
  "architecture": false,
  "fortified wall research": true,
  "chemistry": true,
  "bombard tower research": false,
  "ballistics": true,
  "siege engineers": true,
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
  "sappers": true,
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
  "sanctity": true,
  "fervor": false,
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
  "guilds": true,

  // Misc
  "dark age": true,
  "house": true,
  "wonder": true,
}