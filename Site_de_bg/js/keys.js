
function OnKeyPress(e) {
    let key = e.key;
    console.log(e.key);

    switch (key) {
        case '1':
            window.location = "index.html#accueil";
            break;
        case '2':
            window.location = "index.html#about";
            break;
        case '3':
            window.location = "index.html#contact";
            break;
        default:
            // TODO: remove
            break;
    }
}





