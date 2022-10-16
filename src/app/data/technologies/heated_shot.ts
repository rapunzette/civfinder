
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const heated_shot: Technology = {
  cost: {
    "wood": 0,
    "gold": 100,
    "food": 350,
    "stone": 0
  },
  dependencies: [university.name,],
  "name": "heated shot",
  "age": "castle",
  "color": "green",
}
