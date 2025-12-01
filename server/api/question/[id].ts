export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id" });
  }
  const {
    public: { apiBase },
  } = useRuntimeConfig();
  const url = `${apiBase}/api/question/${id}`;
  const result: any = await $fetch(url);
  return result;
});
