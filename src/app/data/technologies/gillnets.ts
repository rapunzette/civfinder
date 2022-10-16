
import { Technology } from 'src/app/models/technology.model'
import { dock } from './dock'
import { castle_age } from './castle_age'
export const gillnets: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "gillnets",
  "age": "castle",
  "color": "green",
  dependencies: [dock.name,]
}
