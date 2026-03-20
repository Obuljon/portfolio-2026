import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

// ✅ Statik import — Turbopack buni to'g'ri bundle qiladi
const messages = {
  uz: () => import("../messages/uz"),
  en: () => import("../messages/en"),
  ru: () => import("../messages/ru"),
};

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await messages[locale as keyof typeof messages]()).default,
  };
});