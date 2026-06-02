import { createContext } from "react";
import { mockTrips } from "../utils/mockTrips";

export const TripContext = createContext({
  trips: mockTrips,
});