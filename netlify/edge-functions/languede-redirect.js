export default async (request, context) => {
  const url = new URL(request.url);

  // Don't redirect if already on a language page
  if (url.pathname.startsWith("/fr")) {
    return context.next();
  }

  // Don't redirect bots (SEO safety)
  const ua = request.headers.get("user-agent") || "";
  if (/bot|crawl|spider|slurp/i.test(ua)) {
    return context.next();
  }

  // Respect manual choice
  const cookie = request.headers.get("cookie") || "";
  if (cookie.includes("lang=")) {
    return context.next();
  }

  const country = context.geo.country?.code;
  const lang = request.headers.get("accept-language") || "";

  if (country === "FR" || lang.startsWith("fr")) {
    return Response.redirect(new URL("/fr", url), 302);
  }

  return context.next();
};
