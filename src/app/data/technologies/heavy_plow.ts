
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { horse_collar } from './horse_collar'
export const heavy_plow: Technology = {
  "name": "heavy plow",
  "age": "castle",
  "color": "green",
  dependencies: [castle_age.name, horse_collar.name]
}
