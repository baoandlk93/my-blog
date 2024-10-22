export function changeDate() {
  const currentDate = new Date();
  const day = currentDate.getUTCDate().toString().padStart(2, "0");
  const month = (currentDate.getUTCMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
