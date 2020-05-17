
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { pikeman_research } from './pikeman_research'
import { barracks } from './barracks'
export const halberdier_research: Technology = {
  "name": "halberdier research",
  "age": "imperial",
  "color": "green",
  dependencies: [pikeman_research.name, barracks.name, imperial_age.name],
}