import CarDTO from "../dto/car-dto";

export async function getCars(): Promise<CarDTO[]> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + "/api/cars"
  );
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
