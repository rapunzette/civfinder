
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { bodkin_arrow } from './bodkin_arrow'
export const bracer: Technology = {
  dependencies: [imperial_age.name, bodkin_arrow.name],
  "name": "bracer",
  "age": "imperial",
  "color": "green",
}
