function zoom(){
    var zoomVar = document.getElementById('ZoomMessage');
    if(zoomVar.checked)
    {
        //Zoom Out
        document.getElementById('Message').style.height = "max-content";
        document.getElementById('Message').style.width = "20%";
        document.getElementById('Message').style.position = "absolute";
        document.getElementById('Message').style.bottom = "0";
        document.getElementById('Message').style.right = "0";
        document.getElementById('textmode').style.height = "300px";
    }
    else{
        //Zoom In
        document.getElementById('Message').style.height = "max-content";
        document.getElementById('Message').style.width = "100%";
        document.getElementById('Message').style.position = "none";
        document.getElementById('Message').style.bottom = "auto";
        document.getElementById('Message').style.right = "auto";
        document.getElementById('textmode').style.height = "600px";
    }
}