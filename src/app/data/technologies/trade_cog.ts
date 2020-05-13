
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
import { feudal_age } from './feudal_age'
export const trade_cog: Technology = {
  "name": "trade cog",
  "age": "feudal",
  "color": "blue",
  dependencies: [dock.name, feudal_age.name]
}
