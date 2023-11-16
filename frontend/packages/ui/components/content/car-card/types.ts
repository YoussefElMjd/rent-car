import {
  QueryObserverResult,
  RefetchOptions,
  RefetchQueryFilters,
} from "react-query";
import { IDefaultForm, IForm } from "../../../../utils/formik";
import { CarDTO } from "../catalogue-section/types";
export default interface IUseCarCardLogicsTypes {
  form: IForm<IUseCarCardForm> & IDefaultForm;
  unableDateRent?: Date[];
  refetch: <TPageData>(
    options?: (RefetchOptions & RefetchQueryFilters<TPageData>) | undefined
  ) => Promise<QueryObserverResult<Date[], unknown>>;
}

export interface IUseCarCardForm {
  carId?: string;
  email: string;
  phoneNumber: string;
  startDateRent: Date;
  endDateRent: Date;
}
export interface RentBodyData {
  car: CarDTO;
  email: string;
  phoneNumber: string;
  startDateRent: string;
  endDateRent: string;
}
