
import { Technology } from 'src/app/models/technology.model'


import { chain_barding_armor } from './chain_barding_armor'
export const plate_barding_armor: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  dependencies: [, chain_barding_armor.name],
  "name": "plate barding armor",
  "age": "imperial",
  "color": "green",
}
