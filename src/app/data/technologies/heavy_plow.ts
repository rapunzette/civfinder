
import { Technology } from 'src/app/models/technology.model'

import { horse_collar } from './horse_collar'
export const heavy_plow: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "heavy plow",
  "age": "castle",
  "color": "green",
  dependencies: [, horse_collar.name]
}
