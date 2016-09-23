setTimeout(function (){
    for (var i = 1; i <= 49; i++){
        var img=new Image();
        img.src=`img/presidents/${i}.jpeg`;
    }

    // Bind the event listener to body.
    $("body").keydown(keydown)

    document.getElementById("eagle").classList.add("go")
    document.getElementById("breakthrough").classList.remove("hide")
    setTimeout(function (){
        document.getElementById("chief").volume = .25
        document.getElementById("chief").play()

        document.getElementById("curtains").classList.remove("up")
        document.getElementById("stars").classList.remove("down")
        setTimeout(function (){
            document.getElementById("slide1").classList.remove("right")
            $("#slide1 #mural").zoom({ magnify: 5 })
        }, 3000)
    //setTimeout(FIREWORKS, 5000)
    }, 2000)
}, 1500)

