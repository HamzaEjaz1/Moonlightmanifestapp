import type { Locale } from "./config";
import type { Dictionary } from "./en";
import en from "./en";
import ru from "./ru";
import ar from "./ar";
import id from "./id";

const dictionaries: Record<Locale, Dictionary> = { en, ru, ar, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? en;
}
