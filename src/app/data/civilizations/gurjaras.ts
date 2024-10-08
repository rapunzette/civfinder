import { Civilization } from 'src/app/models/civilization.model';
import { genericCostCalc } from 'src/app/utils/genericCostCalc';

export const gurjaras: Civilization = {

  calculateCost: (techs) => genericCostCalc(techs, gurjaras),
  "name": "gurjaras",

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
  "cavalry archer": false,
  "heavy cavalry archer research": false,
  "heavy cavalry archer": false,
  "elephant archer": true,
  "elite elephant archer research": true,
  "elite elephant archer": true,
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
  "champion research": false,
  "champion": false,
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
  "squires": false,
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
  "husbandry": true,
  "bloodlines": true,

  // Siege Workshop
  "siege workshop": true,
  "battering ram": false,
  "capped ram research": false,
  "capped ram": false,
  "siege ram research": false,
  "siege ram": false,
  "armored elephant": true,
  "siege elephant research": true,
  "siege elephant": true,
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
  "heavy demo ship research": true,
  "heavy demo ship": true,
  "galley": true,
  "war galley research": true,
  "war galley": true,
  "galleon research": true,
  "galleon": true,
  "dromon": false,
  "careening": true,
  "dry dock": false,
  "shipwright": true,
  "fish trap": true,

  // University
  "university": true,
  "masonry": true,
  "architecture": true,
  "fortified wall research": true,
  "chemistry": true,
  "bombard tower research": false,
  "ballistics": true,
  "siege engineers": false,
  "guard tower research": true,
  "keep research": true,
  "heated shot": true,
  "arrowslits": false,
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
  "atonement": true,
  "herbal medicine": true,
  "heresy": true,
  "sanctity": true,
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