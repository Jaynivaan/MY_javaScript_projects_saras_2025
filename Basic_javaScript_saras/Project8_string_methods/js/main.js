//concat function- merges strings  together to form a single statement.
function joinStrings() {
    //each variable hold a fragment of meaning
    var part1 = "Every moment says,";
    var part2 = "'I am separate.' ";
    var part3 = "But awareness whispers, ";
    var part4 = "'We were never apart.'";

    //using concat() to connect all the parts into one long string.
    var completeSentence = part1.concat(part2, part3, part4);

    //display the full message inside element ConcatResult
    document.getElementById("ConcatResult").innerHTML = completeSentence;
}

//slice()- extracting fragment from the infinite mind - field..
function sliceDream() {
    //The entire "field" of thought. (world appearance)
    var mindField = "All this - inside and  outside - is just consciousness dreaming itself as many.";

    //extract a "slice"(illusion of separation)
    var illusion = mindField.slice(11, 49);

    //show what fragment the mind perceives
    document.getElementById("sliceOutput").innerHTML = 
    "Extracted Fragment: <br>" + illusion +"<br><br>" +
    "Notice: The the full field still remains untouched.<br>" +
    "<small>slice() only *appears* to separate - but the original consciousness is never divided.</small>";
}