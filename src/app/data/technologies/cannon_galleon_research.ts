
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
import { dock } from './dock'
export const cannon_galleon_research: Technology = {
  cost: { "wood": 100, "gold": 100, "food": 100, "stone": 100 },
  "name": "cannon galleon research",
  "age": "imperial",
  "color": "green",
  dependencies: [chemistry.name, dock.name],
}
