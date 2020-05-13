
import { Technology } from 'src/app/models/technology.model'
import { imperial_age } from './imperial_age'
import { masonry } from './masonry'
export const architecture: Technology = {
  "name": "architecture",
  "age": "imperial",
  "color": "green",
  dependencies: [masonry.name, imperial_age.name]
}
