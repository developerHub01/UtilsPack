declare global {
  interface String {
    up_toCapitalCase(full: boolean = false): string;
  }
}

export {};
