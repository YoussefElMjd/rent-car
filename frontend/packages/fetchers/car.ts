import { CarDTO } from "../ui/components/content/catalogue-section/types";

export async function getCars(): Promise<CarDTO[]> {
  const response = await fetch("http://localhost:8080/api/cars");
  const data = await response.json();

  const result: CarDTO[] = data.map((car: any) => ({
    id: car.id,
    carName: car.carName,
    carPower: car.carPower,
    carDeposit: car.carDeposit,
    rentPrice: car.rentPrice,
  }));

  return result;
}
