
import { Technology } from 'src/app/models/technology.model'
import { castle_age } from './castle_age'
import { scale_mail_armor } from './scale_mail_armor'
export const chain_mail_armor: Technology = {
  "name": "chain mail armor",
  "age": "castle",
  "color": "green",
  dependencies: [castle_age.name, scale_mail_armor.name]
}
