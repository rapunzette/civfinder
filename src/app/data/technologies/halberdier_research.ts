
import { Technology } from 'src/app/models/technology.model'
import { pikeman_research } from './pikeman_research'
export const halberdier_research: Technology = {
  "name": "halberdier research",
  "age": "imperial",
  "color": "green",
  dependencies: [pikeman_research.name,],
}