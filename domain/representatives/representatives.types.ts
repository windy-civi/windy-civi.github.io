import type {
  Divisions,
  GoogleRepresentativesResponse,
  Office,
  Official,
} from "./google.types";

export interface OfficialOffice {
  office: Office;
  official: Official;
}

export interface RepresentativesOcIdResult {
  offices: Office[];
  officials: Official[];
  divisions: Divisions;
}

export interface RepresentativesResult {
  normalizedInput: GoogleRepresentativesResponse["normalizedInput"];
  offices: {
    national: OfficialOffice[];
    state: OfficialOffice[];
    county: OfficialOffice[];
    city: OfficialOffice[];
  };
}

export type RepsAndOffices = {
  representatives: RepresentativesResult | null;
  offices: OfficialOffice[] | null;
};
