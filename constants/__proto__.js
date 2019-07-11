export const INITIAL_GAME = function (data = {}) {
    this.tab = data.tab || 1;
    this.frame = data.frame || 1;
    this.name = data.name || null;
    this.image = data.image || null;
    this.time = data.time || null;
    this.price = data.price || null;
}