export interface CDNEntry {
  "Contract address": string;
  "Domain name": string;
  "Visual proof": string;
}

export interface ICDNService {
  returnTags(chainId: string, apiKey: string | null): Promise<CDNEntry[]>;
}
