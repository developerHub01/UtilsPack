declare global {
  interface String {
    up_toCapitalCase(full: boolean = false): string;
    up_toCamelCase(): string;
    up_toPascalCase(): string;
    up_toSnakeCase(): string;
    up_toKebabCase(): string;
  }
}

export {};
