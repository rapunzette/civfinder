
import { Technology } from 'src/app/models/technology.model'
import { coinage } from './coinage'


export const banking: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "banking",
  "age": "imperial",
  "color": "green",
  dependencies: [coinage.name,]
}
