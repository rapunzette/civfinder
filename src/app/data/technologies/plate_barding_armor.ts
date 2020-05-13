
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { chain_barding_armor } from './chain_barding_armor'
export const plate_barding_armor: Technology = {
  dependencies: [imperial_age.name, chain_barding_armor.name],
  "name": "plate barding armor",
  "age": "imperial",
  "color": "green",
}
