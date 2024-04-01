export default function estimateWord() {

    let wordList = new Set([]);

    const viewWords =
        function () {
            console.log(wordList);
        };


    const insertSingleWord =
        function (singleWord) {
            try {
                if (typeof (singleWord) != typeof ("test_string")) {
                    throw new Error("Invalid input type: Only string input is accepted.");
                }
                wordList.add(singleWord);
            }
            catch (error) {
                console.log("Error in insertSingleWord, ", error.message);
            }
        };

    const insertManyWords =
        function (words) {
            try {
                if (typeof (words) != typeof ([])) {
                    throw new Error("Invalid input type: Only an array of strings is accepted.");
                }
                words.forEach(singleWord => {
                    if (typeof (singleWord) != typeof ("test_string")) {
                        throw new Error("Invalid input type: Only an array of strings is accepted.");
                    }
                });
                words.forEach(singleWord => {
                    wordList.add(singleWord);
                })
            }
            catch (error) {
                console.log("Error in insertManyWords, ", error.message);
            }
        };

    const removeSingleWord =
        function (singleWord) {
            try {
                if (typeof (singleWord) != typeof ("test_string")) {
                    throw new Error("Invalid input type: Only string input is accepted.");
                }
                wordList.delete(singleWord);
            }
            catch (error) {
                console.log("Error in removeSingleWord, ", error.message);
            }
        };

    const removeManyWords =
        function (words) {
            try {
                if (typeof (words) != typeof ([])) {
                    throw new Error("Invalid input type: Only an array of strings is accepted.");
                }
                words.forEach(singleWord => {
                    if (typeof (singleWord) != typeof ("test_string")) {
                        throw new Error("Invalid input type: Only an array of strings is accepted.");
                    }
                });
                words.forEach(singleWord => {
                    wordList.delete(singleWord);
                })
            }
            catch (error) {
                console.log("Error in removeManyWords, ", error.message);
            }
        };

    const findClosestWords = 
        function (singleWord) {
        try {
            if (typeof (singleWord) != typeof ("test_string")) {
                throw new Error("Invalid input type: Only string input is accepted.");
            }
            let hashMap = new Map();
            // hashMap will store all the words corresponding to there minimum edit distance
            let minimumDistance = singleWord.length;

            wordList.forEach(word => {
                let distance = findDistance(singleWord, word);
                // distance = minimum changes required to convert singleWord to word
                // if key (distance) is there in hashMap then add the word else set a new key in hashMap
                if (hashMap.has(distance)) {
                    let newarr = hashMap.get(distance);
                    newarr.push(word);
                    hashMap.set(distance, newarr);
                }
                else {
                    hashMap.set(distance, [word]);
                }
                minimumDistance = Math.min(minimumDistance, distance);
            });
            return hashMap.get(minimumDistance);
        }
        catch (error) {
            console.log("Error in findClosestWord, ", error.message);
        }
    };

    const findDistance = 
        function (word1, word2) {
            // The Levenshtein Distance Algortihm
            const n = word1.length;
            const m = word2.length;
            const dp = new Array(m + 1);
            let previous = 0;

            for (let j = 0; j <= m; j++) {
                dp[j] = j;
            }
            for (let i = 1; i <= n; i++) {
                previous = dp[0];
                dp[0] = i;
                for (let j = 1; j <= m; j++) {
                    const temp = dp[j];
                    if (word1[i - 1] === word2[j - 1]) {
                        dp[j] = previous;
                    } else {
                        dp[j] = 1 + Math.min(previous, dp[j - 1], dp[j]);
                    }
                    previous = temp;
                }
            }
            return dp[m];
        };

    return {
      viewWords,
      insertSingleWord,
      insertManyWords,
      removeSingleWord,
      removeManyWords,
      findClosestWords
    };
}