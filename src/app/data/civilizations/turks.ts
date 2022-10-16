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
  "barracks": true,
  "militia": true,
  "man at arms": true,
  "spearman": true,
  "eagle scout": false,
  "supplies": true,
  "long swordsman": true,
  "pikeman": false,
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
  "arbalester": false,
  "dark age": true,
  "skirmisher": true,
  "elite skirmisher": false,
  "hand cannoneer": true,
  "cavalry archer": true,
  "heavy cavalry archer": true,
  "thumb ring": true,
  "parthian tactics": true,
  "stable": true,
  "scout cavalry": true,
  "bloodlines": true,
  "light cavalry": true,
  "knight": true,
  "camel rider": true,
  "battle elephant": false,
  "steppe lancer": false,
  "husbandry": true,
  "hussar": true,
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
  "onager": false,
  "siege onager": false,
  "heavy scorpion": true,
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
  "fast fire ship": false,
  "cannon galleon": true,
  "elite cannon galleon": true,
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
  "sappers": true,
  "conscription": true,
  "spies": true,
  "monastery": true,
  "monk": true,
  "redemption": true,
  "atonement": true,
  "herbal medicine": false,
  "heresy": true,
  "sanctity": true,
  "fervor": true,
  "faith": true,
  "illumination": false,
  "block printing": false,
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
  "stone shaft mining": false,
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
  "crop rotation": false,
  "bombard tower research": true,
  "fortified wall research": true,
  "guard tower research": true,
  "keep research": true,
  "halberdier research": false,
  "pikeman research": false,
  "champion research": true,
  "man at arms research": true,
  "long swordsman research": true,
  "two handed swordsman research": true,
  "crossbowman research": true,
  "arbalester research": false,
  "cavalier research": true,
  "paladin research": false,
  "elite skirmisher research": false,
  "eagle warrior research": false,
  "elite eagle warrior research": false,
  "heavy cavalry archer research": true,
  "heavy camel rider research": true,
  "elite battle elephant research": false,
  "cannon galleon research": true,
  "elite cannon galleon research": true,
  "war galley research": true,
  "fast fire ship research": false,
  "galleon research": true,
  "heavy demo ship research": true,
  "light cavalry research": true,
  "hussar research": true,
  "elite steppe lancer research": false,
  "onager research": false,
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