
import { Technology } from 'src/app/models/technology.model'
import { feudal_age } from './feudal_age'
import { dock } from './dock'
export const demolition_raft: Technology = {
  cost: {
    "wood": 0,
    "gold": 0,
    "food": 0,
    "stone": 0
  },
  "name": "demolition raft",
  "age": "feudal",
  "color": "blue",
  dependencies: [dock.name,]
}
