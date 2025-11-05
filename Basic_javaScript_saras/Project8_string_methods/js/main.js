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

/*======================
A) toUpperCase -Awaken
+++++++++++++++++++++++\
pseudocode;;
1.read text from input element.
2. convert to uppercase with toUpperCase().
3. Display the transformed text+a note that original remains.
*/

function awakenUppercase() {
    const src = document.getElementById("upperInput").value || "";
    const bright = src.toUpperCase(); // doesnt change the original string.

    const box = document.getElementById("upperOut");
    box.innerHTML = `
        <div>☀️<strong>UpperCased: </strong> <br> ${escapeHTML(bright)}</div>
        <div class="hint" style= "margin-top: .5rem;">
            Note: The original text is unchanged in memory. Strings are immutable;
            we only see the brighter <em>view</em> of the same message.</div> `;
}



/*small helper so pasted text cant inject Html*/
function escapeHTML(s) {
    return s.replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;','>': '&gt;','"':'&quot;',"'":'&#39;'}[c]));
}