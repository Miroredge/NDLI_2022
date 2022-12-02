
function pressId(id) {
    document.getElementById(id).click();
}

window.addEventListener('keydown',
    function(e) {
        let key = e.key;


        console.log(key);

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


            case 'a':
                console.log("AAAAAAAAA");
                pressId("answer-0-1");
                break;
            case 'b':
                pressId("answer-0-2");
                break;
            case 'c':
                pressId("answer-0-3");
                break;
            case 'd':
                pressId("answer-1-1");
                break;
            case 'e':
                pressId("answer-1-2");
                break;
            case 'f':
                pressId("answer-1-3");
                break;
            case 'g':
                pressId("answer-2-1");
                break;
            case 'h':
                pressId("answer-2-2");
                break;
            case 'i':
                pressId("answer-3-1");
                break;
            case 'j':
                pressId("answer-3-2");
                break;
            case 'k':
                pressId("answer-3-3");
                break;
            case 'l':
                pressId("answer-3-4");
                break;
            case 'm':
                pressId("answer-3-5");
                break;
            case 'n':
                pressId("answer-3-6");
                break;
            case 'o':
                pressId("answer-4-1");
                break;
            case 'p':
                pressId("answer-4-2");
                break;
            case 'q':
                pressId("answer-4-3");
                break;
            case 'r':
                pressId("answer-4-4");
                break;
            case 's':
                pressId("answer-4-5");
                break;
            case 't':
                pressId("answer-4-6");
                break;
            case 'u':
                pressId("answer-5-1");
                break;
            case 'v':
                pressId("answer-5-2");
                break;
            case 'w':
                pressId("answer-5-3");
                break;
            case 'x':
                pressId("answer-5-4");
                break;
            case 'y':
                pressId("answer-6-1");
                break;
            case 'z':
                pressId("answer-6-2");
                break;
            case '4':
                pressId("answer-6-3");
                break;
            case '5':
                pressId("answer-6-4");
                break;
            case '6':
                pressId("answer-7-1");
                break;
            case '7':
                pressId("answer-7-2");
                break;
        }
    }, false);



