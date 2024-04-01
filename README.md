# estimate-word

estimate-word is a Node.js package designed to find the closest word from a set of words based on a given input. It provides functions to insert and remove words from the set, as well as to view the current set of words and find the closest matches for a given input. This package is easy to use and facilitates efficient word matching within Node.js applications.

## Installation

```bash
npm install estimate-word
```

## Initialization

```javascript
import estimateWord from "estimate-word";

const wordManager = estimateWord();
```

## Functions

### 1. `insertSingleWord(word: string)`

Adds a single word to the set of available words for finding the closest match later.

- **Parameters:**
  - `word` (string): The word to be added to the set.

- **Example:**
  ```javascript
  wordManager.insertSingleWord("example");
  ```

### 2. `insertManyWords(words: string[])`

Adds an array of words to the set of available words at once.

- **Parameters:**
  - `words` (string[]): An array of words to be added to the set.

- **Example:**
  ```javascript
  wordManager.insertManyWords(["apple", "banana", "orange"]);
  ```

### 3. `removeSingleWord(word: string)`

Removes a particular word from the set of available words.

- **Parameters:**
  - `word` (string): The word to be removed from the set.

- **Example:**
  ```javascript
  wordManager.removeSingleWord("apple");
  ```

### 4. `removeManyWords(words: string[])`

Removes an array of words from the set of available words at once.

- **Parameters:**
  - `words` (string[]): An array of words to be removed from the set.

- **Example:**
  ```javascript
  wordManager.removeManyWords(["apple", "banana"]);
  ```

### 5. `viewWords()`

Outputs the set of words currently available to compare.

- **Example:**
  ```javascript
  wordManager.viewWords();
  ```

### 6. `findClosestWords(word: string): string[]`

Accepts a single word and returns an array of closest words using the available words.

- **Parameters:**
  - `word` (string): The word for which the closest matches are to be found.

- **Returns:**
  - `string[]`: An array of closest words.

- **Example:**
  ```javascript
  const closestWords = wordManager.findClosestWords("aple");
  console.log("Closest words:", closestWords);
  ```

## Example

```javascript
import estimateWord from "estimate-word";

const wordManager = estimateWord();
wordManager.insertManyWords(["apple", "banana", "orange"]);

console.log("Available words:");
wordManager.viewWords();

const closestWords = wordManager.findClosestWords("aple");
console.log("Closest words:", closestWords);
```

## License

This package is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---