xhttp = new XMLHttpRequest();

xhttp.open('GET', 'https://b18019bb.ngrok.io');
xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
xhttp.send(JSON.stringify({ "html": "dasda" }));
xhttp.send()



xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};
console.log(xhttp)