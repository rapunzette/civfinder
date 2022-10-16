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
    if (!vietnamese[tech.name]) {
      console.log(`vietnamese doesn't have ${tech.name}`);
      return;
    }
    //  Conscription free
    if (tech.name === "conscription") {
      return;
    }

    // Economic upgrades cost no wood
    if (
      tech.name === "wheelbarrow"
      || tech.name === "hand cart"
      || tech.name === "coinage"
      || tech.name === "banking"
      || tech.name === "caravan"
      || tech.name === "guilds"
      || tech.name === "double bit axe"
      || tech.name === "bow saw"
      || tech.name === "two man saw"
      || tech.name === "horse collar"
      || tech.name === "heavy plow"
      || tech.name === "crop rotation"
      || tech.name === "gold mining"
      || tech.name === "gold shaft mining"
      || tech.name === "stone mining"
      || tech.name === "stone shaft mining"

    ) {
      cost.food += tech.cost.food;
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
export const vietnamese: Civilization = {
  calculateCost,
  "name": "vietnamese",
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
  "halberdier": true,
  "elite eagle warrior": false,
  "archery range": true,
  "archer": true,
  "crossbowman": true,
  "arbalester": true,
  "skirmisher": true,
  "dark age": true,
  "elite skirmisher": true,
  "hand cannoneer": false,
  "cavalry archer": true,
  "heavy cavalry archer": true,
  "thumb ring": true,
  "parthian tactics": false,
  "stable": true,
  "scout cavalry": true,
  "bloodlines": true,
  "light cavalry": true,
  "knight": true,
  "camel rider": false,
  "battle elephant": true,
  "steppe lancer": false,
  "husbandry": true,
  "hussar": false,
  "cavalier": true,
  "paladin": false,
  "heavy camel rider": false,
  "elite battle elephant": true,
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
  "blast furnace": false,
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
  "shipwright": false,
  "university": true,
  "masonry": false,
  "fortified wall": true,
  "ballistics": true,
  "heated shot": true,
  "murder holes": true,
  "treadmill crane": true,
  "architecture": false,
  "chemistry": true,
  "siege engineers": true,
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
  "redemption": false,
  "atonement": true,
  "herbal medicine": true,
  "heresy": false,
  "sanctity": true,
  "fervor": false,
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
  "heavy camel rider research": false,
  "elite battle elephant research": true,
  "cannon galleon research": true,
  "elite cannon galleon research": true,
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
  "siege ram research": false,
  "heavy scorpion research": false,
  'elephant archer': false,
  'elite elephant archer research': false,
  'elite elephant archer': false,
  'armored elephant': false,
  'siege elephant research': false,
  'siege elephant': false
}