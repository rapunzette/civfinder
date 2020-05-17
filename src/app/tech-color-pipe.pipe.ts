import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'techColorPipe'
})
export class TechColorPipePipe implements PipeTransform {

  public transform(colorString: string): string {
    if (colorString === "blue") {
      return "#3a6a80";
    } else if (colorString === "green") {
      return "#2c5729";
    } else if (colorString === "red") {
      return "#922602";
    } else if (colorString === "transparent") {
      return "transparent";
    } else {
      return "#af30a3"
    }
  }

}
