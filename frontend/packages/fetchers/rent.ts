export async function getUnableDateRent(id: string): Promise<Date[]> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_BACKEND_URL + `/api/car/${id}/rent/unable_date`
  );
  const data = await response.json();
  const result: Date[] = data.map((value: string) => new Date(value));
  return result;
}

export async function addRent() {}
