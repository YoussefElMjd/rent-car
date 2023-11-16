export default interface useCatalogueLogicsType {
  carData?: CarDTO[];
}

export interface CarDTO {
  id?: string;
  carName?: string;
  carPower?: number;
  carDeposit?: number;
  rentPrice?: number;
}
