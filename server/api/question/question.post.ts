export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const url = "http://115.190.61.20:9000/api/statistics";
  const result = await $fetch(url, {
    method: "POST",
    body,
  });
  return result;
});
