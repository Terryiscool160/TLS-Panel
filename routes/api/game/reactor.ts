import { Handlers } from "$fresh/server.ts";

let LastInfo: unknown = {}

export const handler: Handlers = {
  async POST(Request) {
    LastInfo = await Request.json()

    console.log(LastInfo)

    return Response.json({ success: true })
  },

  GET() {
    return Response.json(LastInfo)
  }
};