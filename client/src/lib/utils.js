export const apiUrl = process.env.REACT_APP_API_URL;

export function elapsedTime(orderDate) {
  const now = new Date();
  const orderTime = new Date(orderDate);
  const diffInSeconds = Math.floor((now - orderTime) / 1000);
  const minutes = Math.floor(diffInSeconds / 60);
  const seconds = diffInSeconds % 60;

  return `${minutes.toString().padStart(2, "0")}m:${seconds
    .toString()
    .padStart(2, "0")}s`;
}
