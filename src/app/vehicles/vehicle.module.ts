
// Angular 
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Lib
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card'
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';


// Custom 
import { VehicleDetailsComponent } from "./vehicle-details/vehicle-details.component";
import { VehicleListComponent } from "./vehicle-list/vehicle-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from '@angular/material/input';
import { VehicleTypePipe } from "./vehicleType.pipe";
import { VehicleNationPipe } from "./vehicleNation.pipe";

@NgModule({
    imports: [
        MatTableModule,
        MatCardModule,
        MatSortModule,
        MatFormFieldModule,
        MatInputModule ,
        MatPaginatorModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([
            {
                path: 'vehicles',
                children: [
                    {
                        path: '',
                        component: VehicleListComponent

                    },
                    {
                        path: ':id',
                        component: VehicleDetailsComponent
                    }
                ]
            }
        ])
    ],
    declarations: [
        VehicleListComponent,
        VehicleDetailsComponent,
        VehicleTypePipe,
        VehicleNationPipe
    ]

})
export class VehicleModule { }