import CarDTO from "../dto/car-dto";

export async function getCars(): Promise<CarDTO[]> {
  const response = await fetch("http://3.8.153.194:8080/api/cars");
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

export async function addRent() {}
