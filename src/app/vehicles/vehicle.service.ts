// Angular
import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'

// Lib
import { Observable, tap, throwError, catchError, map, from } from 'rxjs'

// Custom
import { IVehicleComplex } from './vehicle';
import { mapIVehicleApiResponseToIVehicles } from './mapIVehicleApiResponseToIVehciles';
import { IVehiclesApiResponse } from './vehicle';

@Injectable({
    providedIn: 'root'
})

export class VehicleService {

    private baseUrl: string = "https://api.worldoftanks.eu/wot/encyclopedia/"
    private applicationId = ""
    private pageNumber: number = 1;

    private vehiclesAPIUrl = 'api/vehicles.json';
    private headers = { };


    constructor(private http: HttpClient) { }

    getVehicles(): Observable<IVehiclesApiResponse> {
        return this.http.get<IVehiclesApiResponse>(this.vehiclesAPIUrl).pipe(

                catchError(this.handleError)
            )
    }

    getVehicle(id: number): Observable<IVehicleComplex | undefined> {
        let observable  = from(this.getVehicles().pipe(
            map(response => mapIVehicleApiResponseToIVehicles(response).find(v => v.id == id)),
        ))        
        return observable;
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage: string = '';

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`
        }
        else {
            errorMessage = `server returned code: ${err.status}, error message is: ${err.error.message}`
        }
        console.error(errorMessage);
        return throwError(() => errorMessage)

    }
}