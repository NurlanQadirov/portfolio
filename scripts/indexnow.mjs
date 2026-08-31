/**
 * Deploy sonrası IndexNow bildirişi.
 *
 * IndexNow — Bing, Yandex, Seznam və Naver-in ortaq protokoludur: bir göndəriş
 * hamısına çatır. `public/<key>.txt` faylı yalnız sahibliyi təsdiqləyir; URL-lər
 * ayrıca göndərilməsə heç nə baş vermir.
 *
 * Skript sitemap-ı canlı saytdan oxuyur, ona görə yeni səhifə əlavə edəndə
 * burada heç nə dəyişdirmək lazım deyil. Uğursuzluq build-i sındırmır —
 * indeksləmə bildirişi deploy-un vacib hissəsi deyil.
 */
const HOST = "www.nurlanqadirov.az";
const KEY = "0b344a53d0474cc988ed884676a67124";
const ORIGIN = `https://${HOST}`;

const main = async () => {
  const res = await fetch(`${ORIGIN}/sitemap.xml`, { signal: AbortSignal.timeout(30_000) });
  if (!res.ok) throw new Error(`sitemap.xml → HTTP ${res.status}`);

  const urlList = [...(await res.text()).matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urlList.length === 0) throw new Error("sitemap boşdur");

  const submit = await fetch("https://api.indexnow.org/IndexNow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `${ORIGIN}/${KEY}.txt`,
      urlList,
    }),
    signal: AbortSignal.timeout(30_000),
  });

  // 200 və 202 hər ikisi qəbul deməkdir; cavab gövdəsi adətən boş olur.
  if (!submit.ok) throw new Error(`IndexNow → HTTP ${submit.status} ${submit.statusText}`);
  console.log(`IndexNow: ${urlList.length} URL göndərildi (HTTP ${submit.status})`);
};

main().catch((err) => {
  console.warn(`IndexNow göndərilmədi: ${err.message}`);
});
