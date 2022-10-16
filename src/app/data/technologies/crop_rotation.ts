
import { Technology } from 'src/app/models/technology.model'
import { heavy_plow } from './heavy_plow'


export const crop_rotation: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "crop rotation",
  "age": "imperial",
  "color": "green",
  dependencies: [heavy_plow.name,]
}
