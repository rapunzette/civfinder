
import { Technology } from 'src/app/models/technology.model'


import { bow_saw } from './bow_saw'
export const two_man_saw: Technology = {
  cost: {
    "wood": 200,
    "gold": 0,
    "food": 300,
    "stone": 0
  },
  "name": "two man saw",
  "age": "imperial",
  "color": "green",
  dependencies: [, bow_saw.name]
}
