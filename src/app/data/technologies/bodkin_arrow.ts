
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { fletching } from './fletching'
export const bodkin_arrow: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "bodkin arrow",
  "age": "castle",
  "color": "green",
  dependencies: [, fletching.name]
}
