
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { horse_collar } from './horse_collar'
export const heavy_plow: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "heavy plow",
  "age": "castle",
  "color": "green",
  dependencies: [, horse_collar.name]
}
