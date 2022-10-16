
import { Technology } from 'src/app/models/technology.model'

import { scale_mail_armor } from './scale_mail_armor'
export const chain_mail_armor: Technology = {
  cost: {
    "wood": 0,
    "gold": 100,
    "food": 200,
    "stone": 0
  },
  "name": "chain mail armor",
  "age": "castle",
  "color": "green",
  dependencies: [, scale_mail_armor.name]
}
