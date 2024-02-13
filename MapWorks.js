function getDivScale(imgwidth, imgheight){
    var winHeight = window.innerHeight;
    var winWidth = window.innerWidth;
    var scale = imgwidth/imgheight;
    console.log(winHeight+";"+winWidth+";"+scale);
    var divWidth = scale*winHeight;
    if(divWidth <= winWidth){
        return [String(0.8*divWidth)+"px", String(0.8*winHeight)+"px", String((winWidth-(0.8*divWidth))*0.5)+"px","10%"];
    }else{
        var divHeight = winWidth/scale;
        var settingsArray = [String(0.8*winWidth)+"px", String(0.8*divHeight)+"px", "10%", "10%"];
        return settingsArray;
    }
}