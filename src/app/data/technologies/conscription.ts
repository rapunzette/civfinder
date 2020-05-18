
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { castle } from './castle'
export const conscription: Technology = {
  "name": "conscription",
  "age": "imperial",
  "color": "green",
  dependencies: [, castle.name]
}
