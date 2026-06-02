import { mockTrips } from "../utils/mockTrips";

export function useTrips() {
  return {
    trips: mockTrips,
  };
}