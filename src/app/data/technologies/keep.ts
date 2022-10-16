
import { Technology } from 'src/app/models/technology.model'
import { keep_research } from './keep_research'
export const keep: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "keep",
  "age": "imperial",
  "color": "red",
  dependencies: [keep_research.name,]
}
