// Angular 
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

//Lib

//Custom
import { IVehicleComplex } from '../vehicle';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'wot-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {
  vehicle: IVehicleComplex | undefined;
  pageTitle: string = "Vehicle Details";
  errorMessage: string = '';

  nextVehicles: IVehicleComplex[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private vehcileService: VehicleService) { }


  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        let id: number = Number(params.get('id'));
        this.getVehicle(id);
      }
    )
    this.getNextVehicles()
    

  }

  getVehicle(id: number): void {
    this.vehcileService.getVehicle(id).subscribe({
      next: vehicle => {
        console.log("vehcile detail: " + JSON.stringify(vehicle));
        this.vehicle = vehicle
        if (this.vehicle && this.vehicle.next_tanks) {
          this.nextVehicles = [];
          let ids = Object.keys(this.vehicle.next_tanks)

          for (let i = 0; i < ids.length; i++) {
            console.log(ids[i]);
            this.vehcileService.getVehicle(Number(ids[i])).subscribe({
              next: nextNVehicle => {
                if (nextNVehicle) {
                  this.nextVehicles.push(nextNVehicle)
                }
              },
              error: err => this.errorMessage = err
            })
          }
        }
      },
      error: err => this.errorMessage = err
    })

    
  }

  getNextVehicles(): void {
    if (this.vehicle) {


    }
  }

  onBack(): void {
    this.router.navigate(["/vehicles"]);
  }




}
