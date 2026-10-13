import { BACKEND_URL } from "./backend";

export default async function getVenues() {
    const response = await fetch(`${BACKEND_URL}/api/v1/venues`);

    if (!response.ok) {
        throw new Error("Failed to fetch venues");
    }
    const json = await response.json();
    return json
}