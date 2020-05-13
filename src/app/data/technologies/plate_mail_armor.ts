
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { chain_mail_armor } from './chain_mail_armor'
export const plate_mail_armor: Technology = {
  dependencies: [imperial_age.name, chain_mail_armor.name],
  "name": "plate mail armor",
  "age": "imperial",
  "color": "green",
}
