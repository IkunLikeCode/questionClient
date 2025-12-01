export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({ statusCode: 400, statusMessage: "Missing id" });
  }
  const url = `http://115.190.61.20:9000/api/question/${id}`;
  // 服务器到服务器的请求，没有浏览器 CORS 问题
  const result: any = await $fetch(url);

  return result;
});
