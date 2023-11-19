import { RouteContext } from "$fresh/server.ts";

interface Reactor {
  MaxHeat: number
  EnergyEmitted: number,
  Heat: number,
  Active: boolean,
  Output: number
}

export default async function Page(_req: Request, ctx: RouteContext) {
  const resp = await fetch(`${_req.url}api/game/reactor`);

  if (!resp.ok) {
    return <h1>An Error occurred</h1>;
  }

  const { Output, Active, Heat, MaxHeat } = (await resp.json()) as Reactor;

  return (
    <div class="px-4 py-8 mx-auto">
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/icon.png"
          width="128"
          height="128"
        />
        <h1 class="text-4xl font-bold">TLS Data</h1>

        <p>
          <br/>Running Reactor: 1

          <br/><br/>Online: {Active == true && "true" || "false"}
          <br/>Output (EU/t): {Output}
          <br/>Heat: {Heat} / {MaxHeat} ({Math.floor(Heat / MaxHeat)} %)
        </p>
      </div>
    </div>
  );
}