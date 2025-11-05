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

//*===============================
/*B) search -self inquiry
===============================
pseudo (for audio):
1) read the long sentence and the short query.'
2)use search () to get the index of the first match .
3)if -1, report not found. continue inquiry.
4)else, split to before/match/after and highlight the match.
5) show the index so the student understands positions.
*/
function inquireSearch() {
    const hay = document.getElementById("searchText").value || "";
    const needle =document.getElementById("searchQuery").value || "";
    
    const out = document.getElementById("searchOut");
    if (!needle) {
        out.innerHTML = `<span class="hint">Type a query word to begin inquiry.</span> `
        return;
    }

    //search can accept  a string or a regExp;  here we begin with using a plain string.
    const idx = hay.search(needle);

    if (idx === -1) {
        out.innerHTML = `
            <div>🌑<strong>Not Found.</strong> keep inquiring...(search returned -1 )</div>
            <div class="hint">Tip: search() gives the first match position or -1 if absent.</div>        
            `;
            return;
    }
    const before = hay.slice(0, idx);
    const match = hay.slice(idx, idx + needle.length);
    const after =  hay.slice(idx + needle.length);

    out.innerHTML =`
        <div><strong>found at index ${idx}:</strong></div>
        <div style="margin-top: .35rem;">
            ${escapeHTML(before)}<mark>${escapeHTML(match)}</mark>${escapeHTML(after)}
        </div>
        <div class="hint" style="margin-top: .5rem;">
            index is zero-based. if the match begins the sentence, index is 0.
        </div>        
        `;
}



/*small helper so pasted text cant inject Html*/
function escapeHTML(s) {
    return s.replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;','>': '&gt;','"':'&quot;',"'":'&#39;'}[c]));
}