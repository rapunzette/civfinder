
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
import { imperial_age } from './imperial_age'
export const illumination: Technology = {
  dependencies: [monastery.name,],
  "name": "illumination",
  "age": "imperial",
  "color": "green",
}
