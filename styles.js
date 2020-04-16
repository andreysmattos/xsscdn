function addStyle(styles) {
    /* Create style element */
  
    var css = document.createElement("style");
    css.type = "text/css";
  
    if (css.styleSheet) css.styleSheet.cssText = styles;
    else css.appendChild(document.createTextNode(styles));
  
    /* Append style to the head element */
  
    document.getElementsByTagName("head")[0].appendChild(css);
  }
  
  let text = `
      body {
          background-color: red;
      }
  `;
  addStyle(text);