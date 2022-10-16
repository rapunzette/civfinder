
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { scale_mail_armor } from './scale_mail_armor'
export const chain_mail_armor: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "chain mail armor",
  "age": "castle",
  "color": "green",
  dependencies: [, scale_mail_armor.name]
}
