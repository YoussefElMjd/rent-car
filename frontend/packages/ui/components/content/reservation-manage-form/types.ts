import { AxiosResponse } from "axios";
import { IDefaultForm, IForm } from "../../../../utils/formik";
import RentDTO from "../../../../dto/rent-dto";

export interface IUseReservationManageForm {
  reservationNumber: string;
}

export default interface IUseReservationManageFormLogicsTypes {
  form: IForm<IUseReservationManageForm> & IDefaultForm;
  unableDateRent?: Date[];
  rentData?: RentDTO;
  deleteReservation: () => void;
}

export interface RentBody {
  reservationNumber: string;
}
