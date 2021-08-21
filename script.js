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
        // if(prop == "resize"){
        //     document.getElementById("size").style.display = "block";
        // }
        // if(prop == "done"){
        //     var formEl = document.forms.size;
        //     var formData = new FormData(formEl);
        //     var h = formData.get('height')+"px";
        //     var w = formData.get('width')+"px";
        //     console.log(w,h);
        //     document.getElementById("image").width = w ;
        //     document.getElementById("image").height = h ;
        //     document.getElementById("size").style.display = "none";
        // }
        if(prop == "Aborder"){
            document.getElementById("border").style.display = "block";
        }
        if(prop == "bdone"){
            var formEl = document.forms.border;
            var formData = new FormData(formEl);
            var w = formData.get('width')+"px";
            var shape = formData.get('shape');
            var colour = formData.get('colour');
            document.getElementById("image").style.borderWidth = w;
            document.getElementById("image").style.borderStyle = shape;
            document.getElementById("image").style.borderColor = colour;
            document.getElementById("border").style.display = "none";
        }
        if(prop == "rotator"){
            document.getElementById("rotate").style.display = "block";
        }
        if(prop == "rdone"){
            var formEl = document.forms.rotate;
            var formData = new FormData(formEl);
            var angle = formData.get('angle')+"deg";
            document.getElementById("image").style.transform = "rotate("+angle+")";
            document.getElementById("border").style.display = "none";
        }
    })