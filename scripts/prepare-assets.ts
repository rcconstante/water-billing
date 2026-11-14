import sharp from "sharp";
import { mkdir, readdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = process.cwd();
const destination = resolve(root, "public/screens");
await mkdir(destination, { recursive: true });

type Crop = { left: number; top: number; width: number; height: number };
async function crop(source: string, name: string, region: Crop) {
  await sharp(resolve(root, source))
    .extract(region)
    .webp({ quality: 88 })
    .toFile(resolve(destination, `${name}.webp`));
}

const customerNames = [
  "onboarding-welcome",
  "onboarding-advisories",
  "onboarding-payments",
  "login",
  "otp",
  "create-account",
  "home",
  "advisories",
  "status",
  "pay-bill",
  "qr-payment",
  "payment-success",
];
for (const [index, name] of customerNames.entries()) {
  const column = index % 6;
  const row = Math.floor(index / 6);
  await crop("asset/mobile/0cd4fa37-501f-4ede-a9c1-29192a2439ef.png", name, {
    left: 17 + column * 252,
    top: row === 0 ? 10 : 518,
    width: 247,
    height: 490,
  });
}

const workerNames = [
  "worker-home",
  "worker-accounts",
  "worker-capture",
  "worker-scan",
  "worker-confirm",
  "worker-saved",
  "worker-manual",
  "worker-history",
];
for (const [index, name] of workerNames.entries()) {
  await crop("asset/mobile/44ea0b47-dc26-40ef-b3bc-3db913e265c6.png", name, {
    left: 108 + (index % 4) * 318,
    top: index < 4 ? 7 : 536,
    width: 280,
    height: 523,
  });
}

for (const name of await readdir(resolve(root, "asset/web"))) {
  if (!name.endsWith(".png")) continue;
  await sharp(resolve(root, "asset/web", name))
    .resize({ width: 1448, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(resolve(destination, `web-${name.replace(/\.png$/, "")}.webp`));
}
console.log("Prepared 20 individual mobile screens and 8 web screenshots.");
