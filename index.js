module.exports = Phrase;

// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return this.letters().toLowerCase();
	}

	// Returns the letters in the content.
	this.letters = function letters() {
		return (this.content.match(/[a-zA-Z]/gi) || []).join("");
	}

	// Returns true for a palindrom, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}