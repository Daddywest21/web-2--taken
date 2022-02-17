const select = document.querySelector('select');
  // const html = document.querySelector('.output');
  const html = document.querySelector('body');

  function updateBgTextColor(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }

  select.onchange = function () {
    const choice = select.value;
    console.log('gekozen optie', choice);

    // ADD SWITCH STATEMENT
    // HIERBOVEN NIETS VERANDEREN
    // je code met switch case komt vanaf hier:
    switch(choice) {
      case "":
          updateBgTextColor('blue', 'yellow');
          break;
      case "sunny":
        updateBgTextColor('orange', 'purple');
          break;
      case "rainy":
        updateBgTextColor('black', 'white');
          break;
      case "snowing":
         updateBgTextColor('green', 'orange');
            break;
      case "overcast":
            updateBgTextColor('pink', 'white');
               break;     
  }
          // code

          // code
      
  


    // tot hier
    // HIERONDER NIETS VERANDEREN
}
