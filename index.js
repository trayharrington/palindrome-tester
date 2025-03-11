// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
	return Array.from(this).reverse().join("");
}

// Defines a Phrase object.
function Phrase(content) {
	this.content = content;

	this.processor = function processor(string) {
		return string.toLowerCase();
	}

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return processor(this.content);
	}

	// Returns true for a palindrom, false otherwise.
	this.palindrome = function palindrome() {
		return this.processedContent() === this.processedContent().reverse();
	}
}

/*
// Defines a TranslatedPhrase object.
function TranslatedPhrase(content, translation) {
	this.content = content;
	this.translation = translation;

	// Returns content processed for palindrome testing.
	this.processedContent = function processedContent() {
		return processor(this.translation);
	}
}

TranslatedPhrase.prototype = new Phrase();
*/