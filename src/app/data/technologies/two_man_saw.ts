
import { Technology } from 'src/app/models/technology.model'


import { bow_saw } from './bow_saw'
export const two_man_saw: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "two man saw",
  "age": "imperial",
  "color": "green",
  dependencies: [, bow_saw.name]
}
