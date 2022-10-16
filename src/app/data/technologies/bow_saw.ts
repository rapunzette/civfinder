
import { Technology } from 'src/app/models/technology.model'
import { double_bit_axe } from './double_bit_axe'
export const bow_saw: Technology = {
  cost: {
    "wood": 100,
    "gold": 0,
    "food": 150,
    "stone": 0
  },
  "name": "bow saw",
  "age": "castle",
  "color": "green",
  dependencies: [double_bit_axe.name,]
}
