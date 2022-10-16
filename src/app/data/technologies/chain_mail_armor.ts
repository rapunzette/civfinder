
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { scale_mail_armor } from './scale_mail_armor'
export const chain_mail_armor: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "chain mail armor",
  "age": "castle",
  "color": "green",
  dependencies: [, scale_mail_armor.name]
}
