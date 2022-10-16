
import { Technology } from 'src/app/models/technology.model'


import { chain_mail_armor } from './chain_mail_armor'
export const plate_mail_armor: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  dependencies: [, chain_mail_armor.name],
  "name": "plate mail armor",
  "age": "imperial",
  "color": "green",
}
