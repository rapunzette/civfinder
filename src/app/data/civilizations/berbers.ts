import { Civilization } from 'src/app/models/civilization.model';
import { Technology } from 'src/app/models/technology.model';
import { genericCostCalc } from 'src/app/utils/genericCostCalc';

export const berbers: Civilization = {
  calculateCost: (techs: Technology[]) => genericCostCalc(techs, berbers),
  "name": "berbers",
  "dark age": true,
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
  "arbalester": false,
  "skirmisher": true,
  "elite skirmisher": true,
  "hand cannoneer": true,
  "cavalry archer": true,
  "heavy cavalry archer": true,
  "thumb ring": true,
  "parthian tactics": false,
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
  "siege ram": false,
  "onager": true,
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
  "fast fire ship": true,
  "cannon galleon": true,
  "elite cannon galleon": true,
  "heavy demo ship": true,
  "galleon": true,
  "dry dock": true,
  "shipwright": false,
  "university": true,
  "masonry": true,
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
  "keep": false,
  "bombard tower": false,
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
  "heresy": true,
  "sanctity": false,
  "fervor": true,
  "faith": true,
  "illumination": true,
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
  "stone shaft mining": true,
  "lumber camp": true,
  "double bit axe": true,
  "bow saw": true,
  "two man saw": false,
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
  "bombard tower research": false,
  "fortified wall research": true,
  "guard tower research": true,
  "keep research": false,
  "halberdier research": false,
  "pikeman research": true,
  "champion research": true,
  "man at arms research": true,
  "long swordsman research": true,
  "two handed swordsman research": true,
  "crossbowman research": true,
  "arbalester research": false,
  "cavalier research": true,
  "paladin research": false,
  "elite skirmisher research": true,
  "eagle warrior research": false,
  "elite eagle warrior research": false,
  "heavy cavalry archer research": true,
  "heavy camel rider research": true,
  "elite battle elephant research": false,
  "cannon galleon research": true,
  "elite cannon galleon research": true,
  "war galley research": true,
  "fast fire ship research": true,
  "galleon research": true,
  "heavy demo ship research": true,
  "light cavalry research": true,
  "hussar research": true,
  "elite steppe lancer research": false,
  "onager research": true,
  "siege onager research": false,
  "capped ram research": true,
  "siege ram research": false,
  "heavy scorpion research": true,
  'elephant archer': false,
  'elite elephant archer research': false,
  'elite elephant archer': false,
  'armored elephant': false,
  'siege elephant research': false,
  'siege elephant': false
}