
import { Technology } from 'src/app/models/technology.model'


import { bow_saw } from './bow_saw'
export const two_man_saw: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "two man saw",
  "age": "imperial",
  "color": "green",
  dependencies: [, bow_saw.name]
}
