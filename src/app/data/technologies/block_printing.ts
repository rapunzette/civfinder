
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
import { imperial_age } from './imperial_age'
export const block_printing: Technology = {
  dependencies: [monastery.name,],
  "name": "block printing",
  "age": "imperial",
  "color": "green",
}
