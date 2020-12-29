
function activeClass(id){
    document.getElementById("home").className = "inactive";
    document.getElementById("skills").className = "inactive";
    document.getElementById("projects").className = "inactive";
    document.getElementById("education").className = "inactive";
    document.getElementById("services").className = "inactive";
    document.getElementById("contact").className = "inactive";
    document.getElementById("contactMe").className = "inactive";
    document.getElementById(id).className = "active";
}

function displayBlock(id){
    for(let i =1; i<=6; i++){
        document.getElementById("containers"+i).style.display = "none";
    }
    document.getElementById(forward_id(id)).style.display = "grid";
}

document.getElementById("home").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

document.getElementById("skills").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

document.getElementById("projects").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

document.getElementById("education").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

document.getElementById("services").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

document.getElementById("contact").onclick = function () {
    displayBlock(this.id);  
    activeClass(this.id);
}

function forward_id(id){
    if(id == "home")
    {
        return "containers1";
    }

    else if(id == "skills")
    {
        return "containers2";
    }

    else if(id == "projects")
    {
        return "containers3";
    }

    else if(id == "education")
    {
        return "containers4";
    }

    else if(id == "services")
    {
        return "containers5";
    }

        return "containers6";
}


    document.getElementById("contactMe").onclick = function(){
        activeClass(this.id);
        displayBlock(this.id);
        document.getElementById("contact").className = "active";
    }
  

// jQuery

$(document).ready(function(){
    //typing animation
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing2", {
        strings: ["Student", "Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
});
