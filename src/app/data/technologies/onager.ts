
import { Technology } from 'src/app/models/technology.model'
import { mangonel } from './mangonel'
import { imperial_age } from './imperial_age'
export const onager: Technology = {
  "name": "onager",
  "age": "imperial",
  "color": "blue",
  dependencies: [mangonel.name, imperial_age.name]
}
