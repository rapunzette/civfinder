
import { Technology } from 'src/app/models/technology.model'
import { coinage } from './coinage'


export const banking: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 300,
    "stone": 0
  },
  "name": "banking",
  "age": "imperial",
  "color": "green",
  dependencies: [coinage.name,]
}
