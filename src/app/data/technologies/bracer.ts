
import { Technology } from 'src/app/models/technology.model'


import { bodkin_arrow } from './bodkin_arrow'
export const bracer: Technology = {
  cost: {
    "wood": 0,
    "gold": 200,
    "food": 300,
    "stone": 0
  },
  dependencies: [, bodkin_arrow.name],
  "name": "bracer",
  "age": "imperial",
  "color": "green",
}
