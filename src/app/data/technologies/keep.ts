
import { Technology } from 'src/app/models/technology.model'
import { keep_research } from './keep_research'
export const keep: Technology = {
  cost: {
    "wood": 50,
    "gold": 0,
    "food": 0,
    "stone": 125
  },
  "name": "keep",
  "age": "imperial",
  "color": "red",
  dependencies: [keep_research.name,]
}
