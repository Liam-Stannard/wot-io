import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'readableVehicleNation'
})
export class VehicleNationPipe implements PipeTransform {
    transform(value: string): string {
        switch (value) {
            case 'ussr':
                return 'Soviet';
            case 'usa':
                return 'American';
            case 'uk':
                return 'British';
            case 'france':
                return 'French';
            case 'germany':
                return 'German';
            case 'china':
                return 'Chinese';
            case 'japan':
                return 'Japanese';
            case 'sweden':
                return 'Swedish';
            case 'poland':
                return 'Polish';
            case 'italy':
                return 'Italian';
            case 'czech':
                return 'Czech';
            default:
                return value;
        }
    }
}

