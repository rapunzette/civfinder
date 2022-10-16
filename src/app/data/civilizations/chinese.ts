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
    if (!chinese[tech.name]) {
      console.log(`chinese doesn't have ${tech.name}`);
      return;
    }

    // Technologies cost -10% Feudal
    if (tech.age === "feudal") {
      cost.food += Math.ceil(tech.cost.food * 0.9);
      cost.wood += Math.ceil(tech.cost.wood * 0.9);
      cost.gold += Math.ceil(tech.cost.gold * 0.9);
      cost.stone += Math.ceil(tech.cost.stone * 0.9);
      return;
    }

    // Technologies cost -15% Castle
    if (tech.age === "castle") {
      cost.food += Math.ceil(tech.cost.food * 0.85);
      cost.wood += Math.ceil(tech.cost.wood * 0.85);
      cost.gold += Math.ceil(tech.cost.gold * 0.85);
      cost.stone += Math.ceil(tech.cost.stone * 0.85);
      return;
    }

    // Technologies cost -20% Imperial
    if (tech.age === "imperial") {
      cost.food += Math.ceil(tech.cost.food * 0.8);
      cost.wood += Math.ceil(tech.cost.wood * 0.8);
      cost.gold += Math.ceil(tech.cost.gold * 0.8);
      cost.stone += Math.ceil(tech.cost.stone * 0.8);
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

export const chinese: Civilization = {
  calculateCost,
  "name": "chinese",
  "barracks": true,
  "militia": true,
  "man at arms": true,
  "spearman": true,
  "eagle scout": false,
  "supplies": false,
  "long swordsman": true,
  "pikeman": true,
  "eagle warrior": false,
  "squires": true,
  "arson": true,
  "two handed swordsman": true,
  "champion": true,
  "halberdier": true,
  "elite eagle warrior": false,
  "archery range": true,
  "archer": true,
  "crossbowman": true,
  "arbalester": true,
  "skirmisher": true,
  "elite skirmisher": true,
  "hand cannoneer": false,
  "cavalry archer": true,
  "heavy cavalry archer": true,
  "thumb ring": true,
  "parthian tactics": false,
  "stable": true,
  "scout cavalry": true,
  "dark age": true,
  "bloodlines": true,
  "light cavalry": true,
  "knight": true,
  "camel rider": true,
  "battle elephant": false,
  "steppe lancer": false,
  "husbandry": true,
  "hussar": false,
  "cavalier": true,
  "paladin": false,
  "heavy camel rider": true,
  "elite battle elephant": false,
  "elite steppe lancer": false,
  "siege workshop": true,
  "battering ram": true,
  "mangonel": true,
  "scorpion": true,
  "siege tower": true,
  "capped ram": true,
  "siege ram": true,
  "onager": true,
  "siege onager": false,
  "heavy scorpion": true,
  "bombard cannon": false,
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
  "dock": true,
  "fishing ship": true,
  "transport ship": true,
  "fire galley": true,
  "trade cog": true,
  "demolition ship": true,
  "galley": true,
  "fish trap": true,
  "fire ship": true,
  "gillnets": true,
  "demolition raft": true,
  "war galley": true,
  "careening": true,
  "fast fire ship": false,
  "cannon galleon": true,
  "elite cannon galleon": false,
  "heavy demo ship": true,
  "galleon": true,
  "dry dock": true,
  "shipwright": true,
  "university": true,
  "masonry": true,
  "fortified wall": true,
  "ballistics": true,
  "heated shot": true,
  "murder holes": true,
  "treadmill crane": false,
  "architecture": true,
  "chemistry": true,
  "siege engineers": false,
  "arrowslits": true,
  "outpost": true,
  "watch tower": true,
  "guard tower": true,
  "keep": true,
  "bombard tower": true,
  "palisade wall": true,
  "palisade gate": true,
  "gate": true,
  "stone wall": true,
  "castle": true,
  "petard": true,
  "trebuchet": true,
  "hoardings": false,
  "sappers": true,
  "conscription": true,
  "spies": true,
  "monastery": true,
  "monk": true,
  "redemption": false,
  "atonement": true,
  "herbal medicine": true,
  "heresy": false,
  "sanctity": true,
  "fervor": true,
  "faith": true,
  "illumination": true,
  "block printing": true,
  "theocracy": true,
  "house": true,
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
  "wonder": true,
  "mining camp": true,
  "gold mining": true,
  "stone mining": true,
  "gold shaft mining": true,
  "stone shaft mining": true,
  "lumber camp": true,
  "double bit axe": true,
  "bow saw": true,
  "two man saw": true,
  "mill": true,
  "farm": true,
  "market": true,
  "trade cart": true,
  "horse collar": true,
  "coinage": true,
  "caravan": true,
  "heavy plow": true,
  "banking": true,
  "guilds": false,
  "crop rotation": false,
  "bombard tower research": true,
  "fortified wall research": true,
  "guard tower research": true,
  "keep research": true,
  "halberdier research": true,
  "pikeman research": true,
  "champion research": true,
  "man at arms research": true,
  "long swordsman research": true,
  "two handed swordsman research": true,
  "crossbowman research": true,
  "arbalester research": true,
  "cavalier research": true,
  "paladin research": false,
  "elite skirmisher research": true,
  "eagle warrior research": false,
  "elite eagle warrior research": false,
  "heavy cavalry archer research": true,
  "heavy camel rider research": true,
  "elite battle elephant research": false,
  "cannon galleon research": true,
  "elite cannon galleon research": false,
  "war galley research": true,
  "fast fire ship research": false,
  "galleon research": true,
  "heavy demo ship research": true,
  "light cavalry research": true,
  "hussar research": false,
  "elite steppe lancer research": false,
  "onager research": true,
  "siege onager research": false,
  "capped ram research": true,
  "siege ram research": true,
  "heavy scorpion research": true,
  'elephant archer': false,
  'elite elephant archer research': false,
  'elite elephant archer': false,
  'armored elephant': false,
  'siege elephant research': false,
  'siege elephant': false
}