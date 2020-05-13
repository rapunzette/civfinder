
import { Technology } from 'src/app/models/technology.model'
import { heavy_plow } from './heavy_plow'
import { imperial_age } from './imperial_age'
export const crop_rotation: Technology = {
  "name": "crop rotation",
  "age": "imperial",
  "color": "green",
  dependencies: [heavy_plow.name, imperial_age.name]
}
