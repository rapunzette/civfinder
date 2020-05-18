
import { Technology } from 'src/app/models/technology.model'
import { long_swordsman_research } from './long_swordsman_research'
export const two_handed_swordsman_research: Technology = {
  "name": "two handed swordsman research",
  "age": "imperial",
  "color": "green",
  dependencies: [long_swordsman_research.name],
}
