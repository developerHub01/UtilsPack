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
