String.prototype.up_toCapitalCase = function (full = false): string {
  if (!full) return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();

  return this.split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
