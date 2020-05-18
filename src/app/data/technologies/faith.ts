
import { Technology } from 'src/app/models/technology.model'
import { monastery } from './monastery'
import { imperial_age } from './imperial_age'
export const faith: Technology = {
  dependencies: [monastery.name,],
  "name": "faith",
  "age": "imperial",
  "color": "green",
}
