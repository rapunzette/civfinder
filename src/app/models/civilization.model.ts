import { Technology } from "./technology.model";

export interface Civilization {
  calculateCost: (techs: Technology[]) => string;
  "dark age": true; // the root technology is always true
  "name": string;
  "barracks": boolean;
  "militia": boolean;
  "man at arms": boolean;
  "spearman": boolean;
  "eagle scout": boolean;
  "supplies": boolean;
  "long swordsman": boolean;
  "pikeman": boolean;
  "eagle warrior": boolean;
  "squires": boolean;
  "arson": boolean;
  "gambesons": boolean;
  "two handed swordsman": boolean;
  "champion": boolean;
  "halberdier": boolean;
  "elite eagle warrior": boolean;
  "archery range": boolean;
  "archer": boolean;
  "crossbowman": boolean;
  "arbalester": boolean;
  "skirmisher": boolean;
  "elite skirmisher": boolean;
  "hand cannoneer": boolean;
  "cavalry archer": boolean;
  "heavy cavalry archer": boolean;
  "thumb ring": boolean;
  "parthian tactics": boolean;
  "stable": boolean;
  "scout cavalry": boolean;
  "bloodlines": boolean;
  "light cavalry": boolean;
  "knight": boolean;
  "camel rider": boolean;
  "battle elephant": boolean;
  "steppe lancer": boolean;
  "husbandry": boolean;
  "hussar": boolean;
  "cavalier": boolean;
  "paladin": boolean;
  "heavy camel rider": boolean;
  "elite battle elephant": boolean;
  "elite steppe lancer": boolean;
  "siege workshop": boolean;
  "battering ram": boolean;
  "mangonel": boolean;
  "scorpion": boolean;
  "siege tower": boolean;
  "capped ram": boolean;
  "siege ram": boolean;
  "onager": boolean;
  "siege onager": boolean;
  "heavy scorpion": boolean;
  "bombard cannon": boolean;
  "blacksmith": boolean;
  "padded archer armor": boolean;
  "leather archer armor": boolean;
  "ring archer armor": boolean;
  "fletching": boolean;
  "bodkin arrow": boolean;
  "bracer": boolean;
  "forging": boolean;
  "iron casting": boolean;
  "blast furnace": boolean;
  "scale barding armor": boolean;
  "chain barding armor": boolean;
  "plate barding armor": boolean;
  "scale mail armor": boolean;
  "chain mail armor": boolean;
  "plate mail armor": boolean;
  "dock": boolean;
  "fishing ship": boolean;
  "transport ship": boolean;
  "fire galley": boolean;
  "trade cog": boolean;
  "demolition ship": boolean;
  "galley": boolean;
  "fish trap": boolean;
  "fire ship": boolean;
  "gillnets": boolean;
  "demolition raft": boolean;
  "war galley": boolean;
  "careening": boolean;
  "fast fire ship": boolean;
  "cannon galleon": boolean;
  "elite cannon galleon": boolean;
  "heavy demo ship": boolean;
  "galleon": boolean;
  "dromon": boolean;
  "dry dock": boolean;
  "shipwright": boolean;
  "university": boolean;
  "masonry": boolean;
  "fortified wall": boolean;
  "ballistics": boolean;
  "heated shot": boolean;
  "murder holes": boolean;
  "treadmill crane": boolean;
  "architecture": boolean;
  "chemistry": boolean;
  "siege engineers": boolean;
  "arrowslits": boolean;
  "outpost": boolean;
  "watch tower": boolean;
  "guard tower": boolean;
  "keep": boolean;
  "bombard tower": boolean;
  "palisade wall": boolean;
  "palisade gate": boolean;
  "gate": boolean;
  "stone wall": boolean;
  "castle": boolean;
  "petard": boolean;
  "trebuchet": boolean;
  "hoardings": boolean;
  "sappers": boolean;
  "conscription": boolean;
  "spies": boolean;
  "monastery": boolean;
  "fortified church": boolean;
  "monk": boolean;
  "redemption": boolean;
  "atonement": boolean;
  "herbal medicine": boolean;
  "heresy": boolean;
  "sanctity": boolean;
  "fervor": boolean;
  "devotion": boolean;
  "faith": boolean;
  "illumination": boolean;
  "block printing": boolean;
  "theocracy": boolean;
  "house": boolean;
  "town center": boolean;
  "villager": boolean;
  "loom": boolean;
  "town watch": boolean;
  "wheelbarrow": boolean;
  "town patrol": boolean;
  "hand cart": boolean;
  "feudal age": boolean;
  "castle age": boolean;
  "imperial age": boolean;
  "wonder": boolean;
  "mule cart": boolean;
  "mining camp": boolean;
  "gold mining": boolean;
  "stone mining": boolean;
  "gold shaft mining": boolean;
  "stone shaft mining": boolean;
  "lumber camp": boolean;
  "double bit axe": boolean;
  "bow saw": boolean;
  "two man saw": boolean;
  "mill": boolean;
  "farm": boolean;
  "market": boolean;
  "trade cart": boolean;
  "horse collar": boolean;
  "coinage": boolean;
  "caravan": boolean;
  "heavy plow": boolean;
  "banking": boolean;
  "guilds": boolean;
  "crop rotation": boolean;
  "bombard tower research": boolean;
  "fortified wall research": boolean;
  "guard tower research": boolean;
  "keep research": boolean;
  "halberdier research": boolean;
  "pikeman research": boolean;
  "champion research": boolean;
  "man at arms research": boolean;
  "long swordsman research": boolean;
  "two handed swordsman research": boolean;
  "crossbowman research": boolean;
  "arbalester research": boolean;
  "cavalier research": boolean;
  "paladin research": boolean;
  "elite skirmisher research": boolean;
  "eagle warrior research": boolean;
  "elite eagle warrior research": boolean;
  "heavy cavalry archer research": boolean;
  "heavy camel rider research": boolean;
  "elite battle elephant research": boolean;
  "cannon galleon research": boolean;
  "elite cannon galleon research": boolean;
  "war galley research": boolean;
  "fast fire ship research": boolean;
  "galleon research": boolean;
  "heavy demo ship research": boolean;
  "light cavalry research": boolean;
  "hussar research": boolean;
  "elite steppe lancer research": boolean;
  "onager research": boolean;
  "siege onager research": boolean;
  "capped ram research": boolean;
  "siege ram research": boolean;
  "heavy scorpion research": boolean;
  "elephant archer": boolean;
  "elite elephant archer research": boolean;
  "elite elephant archer": boolean;
  "armored elephant": boolean;
  "siege elephant research": boolean;
  "siege elephant": boolean;
}