import { createAPIFileRoute } from "@tanstack/start/api";
import { createRouteHandler } from "uploadthing/server";
import { ourFileRouter } from "~/server/uploadthing";

const handlers = createRouteHandler({
  router: ourFileRouter,
  config: { token: process.env.UPLOADTHING_TOKEN },
});

export const Route = createAPIFileRoute("/api/uploadthing")({
  GET: ({ request }) => handlers(request),
  POST: ({ request }) => handlers(request),
});
