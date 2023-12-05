export default interface IReservationCardProps {
  carName?: string;
  carPower?: number;
  rentPrice?: number;
  carDeposit?: number;
  email?: string;
  phoneNumber?: string;
  startDateRent?: string;
  endDateRent?: string;
  totalPrice?: number;
  deleteReservation?: () => void;
  carImageUrl?: string;
}
