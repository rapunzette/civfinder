
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { padded_archer_armor } from './padded_archer_armor'
export const leather_archer_armor: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "leather archer armor",
  "age": "castle",
  "color": "green",
  dependencies: [, padded_archer_armor.name]
}
