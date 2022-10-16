
import { Technology } from 'src/app/models/technology.model'


import { chain_mail_armor } from './chain_mail_armor'
export const plate_mail_armor: Technology = {
  cost: {
    "wood": 0,
    "gold": 150,
    "food": 300,
    "stone": 0
  },
  dependencies: [, chain_mail_armor.name],
  "name": "plate mail armor",
  "age": "imperial",
  "color": "green",
}
