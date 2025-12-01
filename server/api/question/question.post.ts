export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const url = `${apiBase}/api/statistics`;
  const result = await $fetch(url, {
    method: "POST",
    body,
  });
  return result;
});
