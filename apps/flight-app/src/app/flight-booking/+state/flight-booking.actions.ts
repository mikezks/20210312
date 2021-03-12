import { Flight } from '@flight-workspace/flight-lib';
import { createAction, props } from '@ngrx/store';


export const flightsLoaded = createAction(
  '[FlightBooking] Flights Loaded',
  props<{ flights: Flight[] }>()
);

/* export const loadFlightBookingsFailure = createAction(
  '[FlightBooking] Load FlightBookings Failure',
  props<{ error: any }>()
); */
