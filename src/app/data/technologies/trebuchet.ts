
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { castle } from './castle'
export const trebuchet: Technology = {
  "name": "trebuchet",
  "age": "imperial",
  "color": "blue",
  dependencies: [castle.name, imperial_age.name]
}
