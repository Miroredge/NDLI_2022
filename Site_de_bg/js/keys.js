
function OnKeyPress(e) {
    let key = e.key;
    console.log(e.key);

    switch (key) {
        case '1':
            window.location = "index.html";
            break;
        case '2':
            window.location = "message.html";
            break;
        default:
            // TODO: remove
            break;
    }
}


