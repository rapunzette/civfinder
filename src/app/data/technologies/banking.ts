
import { Technology } from 'src/app/models/technology.model'
import { coinage } from './coinage'
import { imperial_age } from './imperial_age'
export const banking: Technology = {
  "name": "banking",
  "age": "imperial",
  "color": "green",
  dependencies: [coinage.name, imperial_age.name]
}
