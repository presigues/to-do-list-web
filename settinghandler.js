let THEME_TAG = 4;

function light(){
THEME_TAG = 1;
}
function dark(){
    THEME_TAG = 2;
    }
    function mid(){
        THEME_TAG = 3;
        }
        function og(){
            THEME_TAG = 4;
            }

switch(THEME_TAG){
    case 1: // 1 == light mode
    document.getElementById("setbody").style.backgroundColor = "#272727";
        break;
        case 2: // 2 == dark mode
         document.getElementById("setbody").style.backgroundColor = "#272727";
            break;
            case 3: // 3 == midnight aka original with purple
            document.getElementById("setbody").style.backgroundColor = "#272727";
                break;
                case 4: // 4 == og aka blue
                document.getElementById("setbody").style.backgroundColor = "#272727";
                    break; 
}