//anagram function
function Anagram(word1, word2) {
    var Wrd1 = word1.toLowerCase();
    var Wrd2 = word2.toLowerCase();

    var counts = [];
    var word1Length = Wrd1.length;
    var word2Length = Wrd2.length;

    if (word1Length !== word2Length) {
        return false;
    }

    for (var i = 0; i < word1Length; i++) {
        var index = Wrd1.charCodeAt(i);
        counts[index] = (counts[index] || 0) + 1;
    }

    for (var i = 0; i < word2Length; i++) {
        var index = Wrd2.charCodeAt(i);
        if (!counts[index]) { return false; }
        else { counts[index]--; }
    }
    return true;
}
if (Anagram("somya", "ghymn")) {
    console.log("yes is anagram")
}
else {
    console.log("no is not an anagram")
}
