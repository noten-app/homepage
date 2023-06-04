const intro_line = document.getElementById("intro-line");
const new_text = "Answers!";
const finished_text = "FAQ";

window.addEventListener("load", () => window.setTimeout(remove_old_text_char, 1250));

function remove_old_text_char(){
    intro_line.innerText = intro_line.innerText.slice(0,-1);
    if(intro_line.innerText.length === 0) {
        window.setTimeout(new_text_addChar, 500);
    } else window.setTimeout(remove_old_text_char, 100);
}

i = 0;
function new_text_addChar(){
    if (i == new_text.length) { window.setTimeout(replace_to_qa_title, 2000); return; }; 
    if (i > 0 && Math.random()*100 > 80) { window.setTimeout(joke_typo, 100); return; };
    const char = new_text.split("")[i];
    intro_line.innerText = intro_line.innerText + char;
    i++;
    window.setTimeout(new_text_addChar, Math.random() * 75 + 75);
}

function joke_typo(){
    const charcode = Math.floor(Math.random() * 25) + 96;
    const letter = String.fromCharCode(charcode);
    intro_line.innerText = intro_line.innerText + letter;
    window.setTimeout(() => {
        intro_line.innerText = intro_line.innerText.slice(0,-1);
        window.setTimeout(new_text_addChar, Math.random() * 100 + 200);
    }, Math.random() * 100 + 200);
}

removing = true;
function replace_to_qa_title() {
    if(removing) {
        intro_line.innerText = intro_line.innerText.slice(0,-1);
        if(intro_line.innerText.length == 0) {
            removing = false;
            i = 0;
            replace_to_qa_title();
        } else window.setTimeout(replace_to_qa_title, 50);
    } else {
        const char = finished_text.split("")[i];
        intro_line.innerText = intro_line.innerText + char;
        i++;
        if(intro_line.innerText.length != finished_text.length) window.setTimeout(replace_to_qa_title, 50);
    }
}