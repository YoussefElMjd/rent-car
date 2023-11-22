export default interface IToastParam {
  title: string;
  type: AlertType;
}

export enum AlertType {
  SUCCESS,
  ERROR,
}
