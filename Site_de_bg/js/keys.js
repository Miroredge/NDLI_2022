var list_keys = [];


function arrayEqual(a, b) {
    return Array.isArray(a) &&
        Array.isArray(b) &&
        a.length === b.length &&
        a.every((val, index) => val === b[index]);
}

function is_konami(l) {
    // const up = ["ArrowUp", "ArrowUp"];
    // const down  = ["ArrowDown", "ArrowDown"];
    // const left  = ["ArrowLeft", "ArrowLeft"];
    // const right = ["ArrowRight", "ArrowRight"];
    // const a = ["a", "a"];
    // const b = ["b", "b"];
    // const konami = [].concat(up, up, down, down, left, right, left, right, b, a);
    const konami = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];
    console.log("konami")
    console.log(konami);
    return arrayEqual(l, konami);
}

function downloadURI(uri, name)
{
    var link = document.createElement("a");
    // If you don't know the name or want to use
    // the webserver default set name = ''
    link.setAttribute('download', name);
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove();
}

window.addEventListener('keydown',
function(e) {
    let key = e.key;
    list_keys.push(key);
    // keep only 20 events (that is 10 keypresses) at most
    list_keys = list_keys.slice(-10);
    if ( is_konami(list_keys) ) {
        window.location = "konami.html";
        return;
    }

    console.log(list_keys);

    switch (key) {
        case '1':
            window.location = "index.html#accueil";
            break;
        case '2':
            window.location = "index.html#quizz";
            break;
        case '3':
            window.location = "index.html#informations";
            break;
        case 'q':
        case 'Q':
            if (String(window.location).includes("index")) {
                window.location = "quizz.html";
            }
            break;
        case 'd':
        case 'D':
            if (String(window.location).includes("index")) {
                downloadURI("assets/img/prot3ct_yours3lf.png", "pr0t3ct_y0urs3lf.png");
            }
            break;
        case 'C':
        case 'c':
            if (String(window.location).includes("index")) {
                window.location = "credit.html";
            }
            break;
        case 'R':
        case 'r':
            if (String(window.location).includes("index")) {
                window.location = "chauvinisme.html";
            }
        default:
            console.log(key);
            break;
        
    }
}, false);






