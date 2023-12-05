export async function getUnableDateRent(id: string): Promise<Date[]> {
  const response = await fetch(
    `http://3.8.153.194:80/api/car/${id}/rent/unable_date`,
    { referrerPolicy: "unsafe-url" }
  );
  const data = await response.json();
  const result: Date[] = data.map((value: string) => new Date(value));
  return result;
}

export async function addRent() {}
