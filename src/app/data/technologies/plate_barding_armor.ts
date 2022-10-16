
import { Technology } from 'src/app/models/technology.model'


import { chain_barding_armor } from './chain_barding_armor'
export const plate_barding_armor: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [, chain_barding_armor.name],
  "name": "plate barding armor",
  "age": "imperial",
  "color": "green",
}
