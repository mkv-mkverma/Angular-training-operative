import { Pipe, PipeTransform } from '@angular/core';
import { ILocation } from '../../workshops/models/IWorkshop';

@Pipe({
  name: 'location',
  standalone: true,
})
export class LocationPipe implements PipeTransform {
  transform(
    location: ILocation,
    formate: 'long' | 'short' = 'long',
    numChars = 80
  ): unknown {
    let locationStr = `${location.address}, ${location.city}, ${location.state}`;
    if (formate === 'short') {
      locationStr = locationStr.substring(0, numChars) + '...';
    }
    return locationStr;
  }
}
