
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { fletching } from './fletching'
export const bodkin_arrow: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "bodkin arrow",
  "age": "castle",
  "color": "green",
  dependencies: [, fletching.name]
}
