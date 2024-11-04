import { SupportedLocale } from "@windycivi/domain/constants";
import {
  CiviLegislationData,
  CiviGptLegislationData,
  DataStoreGetter,
} from "@windycivi/domain/types";

export const viteDataGetter: DataStoreGetter = {
  getLegislationData: (locale) => legislationApi[locale](),
  getGptLegislation: (locale) => gptApi[locale](),
  locales: SupportedLocale,
};

// todo: this depends on the scraper repo to be installed, and the legislation to be there. Make this more decoupled.
const legislationApi: Record<
  SupportedLocale,
  () => Promise<CiviLegislationData[]>
> = {
  [SupportedLocale.Chicago]: () =>
    import("../../../scraper/dist_legislation/chicago.legislation.json").then(
      (m) => m.default,
    ) as Promise<CiviLegislationData[]>,
  [SupportedLocale.Illinois]: () =>
    import("../../../scraper/dist_legislation/illinois.legislation.json").then(
      (m) => m.default,
    ),
  [SupportedLocale.USA]: () =>
    import("../../../scraper/dist_legislation/usa.legislation.json").then(
      (m) => m.default,
    ) as unknown as Promise<CiviLegislationData[]>,
};

const gptApi: Record<SupportedLocale, () => Promise<CiviGptLegislationData>> = {
  [SupportedLocale.Chicago]: () =>
    import(
      "../../../scraper/dist_legislation/chicago.legislation.gpt.json"
    ).then((m) => m.default) as unknown as Promise<CiviGptLegislationData>,
  [SupportedLocale.Illinois]: () =>
    import(
      "../../../scraper/dist_legislation/illinois.legislation.gpt.json"
    ).then((m) => m.default) as unknown as Promise<CiviGptLegislationData>,
  [SupportedLocale.USA]: () =>
    import("../../../scraper/dist_legislation/usa.legislation.gpt.json").then(
      (m) => m.default,
    ) as unknown as Promise<CiviGptLegislationData>,
};
