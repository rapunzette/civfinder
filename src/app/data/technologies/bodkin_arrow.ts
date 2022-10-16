
import { Technology } from 'src/app/models/technology.model'

import { fletching } from './fletching'
export const bodkin_arrow: Technology = {
  cost: {
    "wood": 0,
    "gold": 100,
    "food": 200,
    "stone": 0
  },
  "name": "bodkin arrow",
  "age": "castle",
  "color": "green",
  dependencies: [, fletching.name]
}
