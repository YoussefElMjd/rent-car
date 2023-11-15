import { IDefaultForm, IForm } from "../../../../utils/formik";
export default interface IUseCarCardLogicsTypes {
  form: IForm<IUseCarCardForm> & IDefaultForm;
}

export interface IUseCarCardForm {
  carId?: string;
  email: string;
  phoneNumber: string;
  startRentDate: Date;
  endRentDate: Date;
}
