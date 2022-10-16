
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
import { feudal_age } from './feudal_age'
export const trade_cog: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "trade cog",
  "age": "feudal",
  "color": "blue",
  dependencies: [dock.name,]
}
