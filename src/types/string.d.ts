declare global {
  interface String {
    up_toCapitalCase(full: boolean = false): string;
    up_toCamelCase(): string;
  }
}

export {};
