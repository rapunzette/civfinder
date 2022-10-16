
import { Technology } from 'src/app/models/technology.model'
import { keep_research } from './keep_research'
export const keep: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "keep",
  "age": "imperial",
  "color": "red",
  dependencies: [keep_research.name,]
}
