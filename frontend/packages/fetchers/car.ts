import CarDTO from "../dto/car-dto";

export async function getCars(): Promise<CarDTO[]> {
  const response = await fetch("http://3.8.153.194:80/api/cars", {
    referrerPolicy: "unsafe-url",
  });
  const data = await response.json();

  const result: CarDTO[] = data.map((car: any) => {
    return {
      id: car.id,
      carName: car.carName,
      carPower: car.carPower,
      carDeposit: car.carDeposit,
      rentPrice: car.rentPrice,
      imageUrls: car.imageUrls,
    };
  });

  return result;
}

export async function addRent() {}
