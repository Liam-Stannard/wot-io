// Angular 
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
//Lib
import { Subscription } from 'rxjs'

//Custom
import { mapIVehicleApiResponseToIVehicles } from '../mapIVehicleApiResponseToIVehciles'
import { VehicleService } from '../vehicle.service';
import { IVehicle } from '../vehicle';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'wot-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

 

  vehicles: IVehicle[] = [];
  filteredVehicles: IVehicle[] = [];
  errorMessage: string = '';
  vehicleServiceSub!: Subscription;
  searchFormSub!: Subscription | undefined;
  columnsToDisplay = ['tier', 'type', 'nation', 'name'];
  dataSource!:  MatTableDataSource<IVehicle>;

  searchForm!: FormGroup;

  constructor(private vehicleService: VehicleService,
              private router: Router) {
  }


  ngOnInit(): void {

    this.searchForm = new FormGroup({
      searchFilter: new FormControl('')
    });

    this.vehicleServiceSub = this.vehicleService.getVehicles().subscribe({
      next: vehicleApiResponse => {
        let mappedVehicles: IVehicle[] = mapIVehicleApiResponseToIVehicles(vehicleApiResponse);
        this.vehicles = mappedVehicles;
        this.filteredVehicles = mappedVehicles;
        
      },
      error: err => this.errorMessage = err
    });


   this.searchFormSub = this.searchForm.get('searchFilter')?.valueChanges.subscribe(value => {
      this.filterVehicles(value);
    });

    this.filteredVehicles = this.vehicles;
    

    

  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource<IVehicle>(this.filteredVehicles);
    this.dataSource.paginator = this.paginator;
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/vehicles', id])
  }


  filterVehicles(filterValue: string) {
    if (filterValue) {
      this.filteredVehicles = this.vehicles.filter(vehicle => vehicle.name.toLowerCase().includes(filterValue.toLowerCase()));
    } else {
      this.filteredVehicles = this.vehicles;
    }
  }

  ngOnDestroy(): void {
    this.vehicleServiceSub.unsubscribe();
    this.searchFormSub?.unsubscribe();
  }

  //add pagination for the filtered vehicles used on the table
  
  

  




}
