export async function getUnableDateRent(id: string): Promise<Date[]> {
  const response = await fetch(
    `http://3.8.153.194:8080/api/car/${id}/rent/unable_date`
  );
  const data = await response.json();
  const result: Date[] = data.map((value: string) => new Date(value));
  return result;
}

export async function addRent() {}
