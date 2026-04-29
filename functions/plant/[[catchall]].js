// Cloudflare Pages Function
// /plant/* へのすべてのリクエストを /plant/index.html の内容で返す
// (URL は変えず、ステータス 200 で返すリライト動作)
//
// v1.5 では静的フォールバック用途、v1.6 で動的化予定。

export async function onRequest(context) {
  const url = new URL(context.request.url);

  // /plant/{何か} のリクエストでも /plant/ の内容を返す
  // env.ASSETS.fetch() は pretty path を期待するので /plant/ にする
  url.pathname = '/plant/';

  return context.env.ASSETS.fetch(url);
}
