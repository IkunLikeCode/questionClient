export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = "http://localhost:9000/api/statistics";
  const result = await $fetch(url, {
    method: "POST",
    body,
  });
  return result;
});
