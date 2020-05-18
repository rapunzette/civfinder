
import { Technology } from 'src/app/models/technology.model'
import { onager_research } from './onager_research'
export const onager: Technology = {
  "name": "onager",
  "age": "imperial",
  "color": "blue",
  dependencies: [onager_research.name,]
}
