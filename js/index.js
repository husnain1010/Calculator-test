let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
let screenValue = "";
for (item of buttons) {
  item.addEventListener('click', (e) => {
    buttonText = e.target.innerText;


    switch (buttonText) {
      case "X":
        buttonText="*";
        screenValue += buttonText;
        screen.value=screenValue;
        
        break;
        case "C":
          screenValue = "";
          screen.value=screenValue;
          break;
          case "=":
            screen.value = eval(screenValue);
              screenValue = screen.value;
            break;

      default:
        screenValue += buttonText;
      screen.value = screenValue;
        break;
    }
  });
}




