import { BACKEND_URL } from "./backend";

export default async function getVenue(vid:string) {
    const response = await fetch(`${BACKEND_URL}/api/v1/venues/${vid}`)

    if (!response.ok) {
        throw new Error(`Failed to fetch item with id: ${vid}`)
    }

    return await response.json();
}