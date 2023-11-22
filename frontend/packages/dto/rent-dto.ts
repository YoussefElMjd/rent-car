import CarDTO from "./car-dto";

export default interface RentDTO {
  id: string;
  reservationNumber: string;
  email: string;
  phoneNumber: string;
  startDateRent: string;
  endDateRent: string;
  car: CarDTO;
}
