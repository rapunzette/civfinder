import { Technology } from 'src/app/models/technology.model';
import { imperial_age } from './imperial_age';
import { camel_rider } from './camel_rider';

export const heavy_camel_rider: Technology = {
  "name": "heavy camel rider",
  "age": "imperial",
  "color": "blue",
  dependencies: [imperial_age.name, camel_rider.name]
}