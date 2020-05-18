
import { Technology } from 'src/app/models/technology.model'
import { stable } from './stable'
export const light_cavalry_research: Technology = {
  "name": "light cavalry research",
  "age": "castle",
  "color": "green",
  dependencies: [stable.name],
}
