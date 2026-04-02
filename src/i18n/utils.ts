import en from './en.json';

const dictionaries: Record<string, Record<string, string>> = { en };

export function t(key: string): string {
  return dictionaries.en[key] ?? key;
}
