String.prototype.up_toCapitalCase = function (): string {
  return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};
