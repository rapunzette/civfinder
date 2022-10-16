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
    if (!italians[tech.name]) {
      console.log(`italians doesn't have ${tech.name}`);
      return;
    }

    // Advancing to the next age costs -15%
    if (tech.name === "feudal age" || tech.name === "castle age" || tech.name === "imperial age") {
      cost.food += Math.ceil(tech.cost.food * 0.85);
      cost.wood += Math.ceil(tech.cost.wood * 0.85);
      cost.gold += Math.ceil(tech.cost.gold * 0.85);
      cost.stone += Math.ceil(tech.cost.stone * 0.85);
      return;
    }

    // Dock and University technologies cost -33%
    if (
      tech.name === "masonry"
      || tech.name === "architecture"
      || tech.name === "fortified wall research"
      || tech.name === "ballistics"
      || tech.name === "heated shot"
      || tech.name === "guard tower research"
      || tech.name === "keep research"
      || tech.name === "bombard tower research"
      || tech.name === "arrowslits"
      || tech.name === "murder holes"
      || tech.name === "treadmill crane"
      || tech.name === "chemistry"
      || tech.name === "careening"
      || tech.name === "dry dock"
      || tech.name === "shipwright"
      || tech.name === "elite cannon galleon research"
      || tech.name === "war galley research"
      || tech.name === "fast fire ship research"
      || tech.name === "galleon research"
      || tech.name === "gillnets"
    ) {
      cost.food += Math.ceil(tech.cost.food * 0.67);
      cost.wood += Math.ceil(tech.cost.wood * 0.67);
      cost.gold += Math.ceil(tech.cost.gold * 0.67);
      cost.stone += Math.ceil(tech.cost.stone * 0.67);
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
export const italians: Civilization = {
  calculateCost,
  "name": "italians",
  "barracks": true,
  "militia": true,
  "man at arms": true,
  "spearman": true,
  "eagle scout": false,
  "supplies": true,
  "long swordsman": true,
  "pikeman": true,
  "eagle warrior": false,
  "squires": true,
  "arson": true,
  "two handed swordsman": true,
  "champion": true,
  "halberdier": false,
  "elite eagle warrior": false,
  "archery range": true,
  "archer": true,
  "crossbowman": true,
  "arbalester": true,
  "skirmisher": true,
  "elite skirmisher": true,
  "hand cannoneer": true,
  "dark age": true,
  "cavalry archer": true,
  "heavy cavalry archer": false,
  "thumb ring": true,
  "parthian tactics": false,
  "stable": true,
  "scout cavalry": true,
  "bloodlines": true,
  "light cavalry": true,
  "knight": true,
  "camel rider": false,
  "battle elephant": false,
  "steppe lancer": false,
  "husbandry": true,
  "hussar": true,
  "cavalier": true,
  "paladin": false,
  "heavy camel rider": false,
  "elite battle elephant": false,
  "elite steppe lancer": false,
  "siege workshop": true,
  "battering ram": true,
  "mangonel": true,
  "scorpion": true,
  "siege tower": true,
  "capped ram": true,
  "siege ram": false,
  "onager": true,
  "siege onager": false,
  "heavy scorpion": false,
  "bombard cannon": true,
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
  "fast fire ship": true,
  "cannon galleon": true,
  "elite cannon galleon": true,
  "heavy demo ship": false,
  "galleon": true,
  "dry dock": true,
  "shipwright": true,
  "university": true,
  "masonry": true,
  "fortified wall": true,
  "ballistics": true,
  "heated shot": true,
  "murder holes": true,
  "treadmill crane": true,
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
  "hoardings": true,
  "sappers": false,
  "conscription": true,
  "spies": true,
  "monastery": true,
  "monk": true,
  "redemption": true,
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
  "gold shaft mining": false,
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
  "guilds": true,
  "crop rotation": true,
  "bombard tower research": true,
  "fortified wall research": true,
  "guard tower research": true,
  "keep research": true,
  "halberdier research": false,
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
  "heavy cavalry archer research": false,
  "heavy camel rider research": false,
  "elite battle elephant research": false,
  "cannon galleon research": true,
  "elite cannon galleon research": true,
  "war galley research": true,
  "fast fire ship research": true,
  "galleon research": true,
  "heavy demo ship research": false,
  "light cavalry research": true,
  "hussar research": true,
  "elite steppe lancer research": false,
  "onager research": true,
  "siege onager research": false,
  "capped ram research": true,
  "siege ram research": false,
  "heavy scorpion research": false,
  'elephant archer': false,
  'elite elephant archer research': false,
  'elite elephant archer': false,
  'armored elephant': false,
  'siege elephant research': false,
  'siege elephant': false
}