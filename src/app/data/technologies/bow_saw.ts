
import { Technology } from 'src/app/models/technology.model'
import { double_bit_axe } from './double_bit_axe'
import { castle_age } from './castle_age'
export const bow_saw: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "bow saw",
  "age": "castle",
  "color": "green",
  dependencies: [double_bit_axe.name,]
}
