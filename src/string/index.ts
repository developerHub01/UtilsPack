/**
 * Capitalizes the first letter of the string.
 * Optionally, you can capitalize the first letter of each word in the string.
 *
 * @param {boolean} [full=false] - If true, capitalizes the first letter of each word in the string.
 *                                  If false, capitalizes only the first letter of the string.
 * @returns {string} The transformed string with capitalized letters.
 */
String.prototype.up_toCapitalCase = function (full: boolean = false): string {
  if (!full) return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();

  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/**
 * Converts a string to camelCase.
 * The first word will have a lowercase first letter, and all subsequent words will have their first letter capitalized, with the rest of the letters in lowercase.
 *
 * @returns {string} The string converted to camelCase format.
 */
String.prototype.up_toCamelCase = function (): string {
  return this.split(" ")
    .map(
      (word, index) =>
        (!index ? word.charAt(0).toLowerCase() : word.charAt(0).toUpperCase()) +
        word.slice(1).toLowerCase()
    )
    .join("");
};

/**
 * Converts a string to PascalCase.
 * Each word in the string will have its first letter capitalized, and the rest of the letters will be in lowercase.
 *
 * @returns {string} The string converted to PascalCase format.
 */
String.prototype.up_toPascalCase = function (): string {
  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
};

/**
 * Converts a string to snake_case.
 * All words are converted to lowercase and separated by underscores.
 *
 * @returns {string} The string converted to snake_case format.
 */
String.prototype.up_toSnakeCase = function (): string {
  return this.split(" ")
    .map((word) => word.toLowerCase())
    .join("_");
};
/**
 * 
 * Converts a string to kebab-case.
 * All words are converted to lowercase and separated by hyphens.
 *
 * @returns {string} The string converted to kebab-case format.
 */
String.prototype.up_toKebabCase = function (): string {
  return this.split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
};
