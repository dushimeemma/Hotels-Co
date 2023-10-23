export interface Room {
  id: string;
  name: string;
  avatars: string[];
  location: string;
  availability: string;
  price: number;
  ratings: number;
}

export async function fetchRooms(): Promise<Room[]> {
  const url = 'https://6534b04de1b6f4c59046dd1b.mockapi.io/api/v1/rooms';

  const response = await fetch(url);
  return response.json();
}
