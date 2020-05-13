
import { Technology } from 'src/app/models/technology.model'
import { university } from './university'
export const masonry: Technology = {
  dependencies: [university.name,],
  "name": "masonry",
  "age": "castle",
  "color": "green",
}
