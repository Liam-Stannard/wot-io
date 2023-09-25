import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'readableVehicleType'
})
export class VehicleTypePipe implements PipeTransform {
    transform(value: string): string {
        switch (value) {
            case 'heavyTank':
                return 'Heavy Tank';
            case 'mediumTank':
                return 'Medium Tank';
            case 'lightTank':
                return 'Light Tank';
            case 'AT-SPG':
                return 'Tank Destroyer';
            case 'SPG':
                return 'Artillery';
            default:
                return 'Unknown';
        }
    }
}
//
// Path: src/app/vehicles/vehicle-list/vehicle-list.component.html
// <div class="container-fluid">
//     <div class="row">
//         <div class="col">
//             <h1>Vehicle List</h1>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col">
//             <form [formGroup]="searchForm">
//                 <mat-form-field>
//                     <mat-label>Search</mat-label>
//                     <input matInput type="text" formControlName="searchFilter">
//                 </mat-form-field>
//             </form>
//         </div>
//     </div>
//     <div class="row">
//         <div class="col">
//             <table mat-table [dataSource]="filteredVehicles" matSort>
//                 <ng-container matColumnDef="tier">
//                     <th mat-header-cell *matHeaderCellDef mat-sort-header>Tier</th>
//                     <td mat-cell *matCellDef="let vehicle">{{vehicle.tier}}</td>
//                 </ng-container>
//                 <ng-container matColumnDef="type">
//                     <th mat-header-cell *matHeaderCellDef mat-sort-header>Type</th>
//                     <td mat-cell *matCellDef="let vehicle">{{vehicle.type | vehicleType}}</td>
