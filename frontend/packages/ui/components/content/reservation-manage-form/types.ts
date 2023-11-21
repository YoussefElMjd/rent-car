import { AxiosResponse } from "axios";
import { IDefaultForm, IForm } from "../../../../utils/formik";

export interface IUseReservationManageForm {
  reservationNumber: string;
}

export default interface IUseReservationManageFormLogicsTypes {
  form: IForm<IUseReservationManageForm> & IDefaultForm;
  unableDateRent?: Date[];
  rentData?: RentResponseData;
  deleteReservation: () => void;
}

export interface RentBody {
  reservationNumber: string;
}
export interface RentResponseData {
  id: string;
  reservationNumber: string;
  email: string;
  phonenumber: string;
  startDateRent: string;
  endDateRent: string;
}
