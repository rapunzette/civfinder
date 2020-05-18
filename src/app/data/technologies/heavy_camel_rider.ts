import { Technology } from 'src/app/models/technology.model';
import { heavy_camel_rider_research } from './heavy_camel_rider_research';

export const heavy_camel_rider: Technology = {
  "name": "heavy camel rider",
  "age": "imperial",
  "color": "blue",
  dependencies: [heavy_camel_rider_research.name]
}