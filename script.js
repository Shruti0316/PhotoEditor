var img = document.getElementById("image");
    function selectImage(e){
        var img = document.getElementById("image");
        img.src = URL.createObjectURL(e.files[0]);
    };
    addEventListener("click",function(e){
        var prop = e.target.id;
        var range = document.getElementById("slider");
        range.addEventListener("mousemove",function(e){
            img.style.filter = prop +"(" + range.value + "%)";
        })
    })