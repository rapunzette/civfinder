
import { Technology } from 'src/app/models/technology.model'
import { chemistry } from './chemistry'
export const bombard_tower_research: Technology = {
  "name": "bombard tower research",
  "age": "imperial",
  "color": "green",
  dependencies: [chemistry.name],
}
