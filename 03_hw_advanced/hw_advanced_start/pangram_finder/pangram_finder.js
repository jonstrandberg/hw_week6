const PangramFinder = function (phrase) {
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
  this.phrase = phrase.toLowerCase()
}

PangramFinder.prototype.isPangram = function () {

  const letterPresent = this.alphabet.filter(letter => this.phrase.includes(letter));
  return letterPresent.length === this.alphabet.length;
}

module.exports = PangramFinder;
