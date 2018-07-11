var sections =["home","program1","program2","biologist","teacher","hobby"];
var actualSection=0;
var active=false; //This bool checks if the screen is changing or not yet.
var oriX=0
var objX=screen.width;

//adjusting the footer
var foot= document.getElementById("foot");
foot.style.width=screen.width;
//foot.style.bottom=-1400;

//Making the sidescrollbox bigger
var sidebox = document.getElementById("sidescroll");
sidebox.style.width=screen.width;

//adjusting pagesections
var pagesections=document.getElementsByClassName("pagesection");
for(var i=0;i<pagesections.length;i++){
    pagesections[i].style.width=screen.width;
    pagesections[i].style.left=screen.width;
}
pagesections[0].style.left=0;
pagesections[0].style.display="block";

//adjust rectitem
var rect= document.getElementById("listrect");
rect.style.left=50;
var rectXO=50;

function sectionLeft() {
    //alert("You just pressed left");
    var objectivesection=0;
    if (actualSection>0){
        objectivesection=actualSection-1;
    } else {
        objectivesection=sections.length-1;
    }
    sectionmove(objectivesection);
}

function sectionRight() {
    //alert("you just pressed the other left");
    var objectivesection=0;
    if (actualSection<sections.length-2){
        objectivesection=actualSection+1;
    } else {
        objectivesection=0;
    }
    sectionmove(objectivesection);
}

function sectionmove(objective){
    //alert("lets move this");
    var section= sections[actualSection];
    var originsec= document.getElementById(section);
    var objectivesec=document.getElementById(sections[objective]);
    //alert("section= "+section+"  objective= "+objective);  
    
    //rectangle info;
    var rectXF=50+objective*52;
    //alert(rectXF);
    var rectSpeed=(rectXF-rectXO)/100;
    //alert(rectSpeed);
    if (active==false){
        if (objectivesec!==originsec){
            active=true;
            objectivesec.style.display="inline"; //make objective visible
            var moving = setInterval(move,10);
        }
    }
    function move(){
            if (objX<=0) {
                objectivesec.style.left=0;//Make sure it lies on the screen
                clearInterval(moving); //stop moving
                active=false; //Be capable to start moving again
      //          alert("move out");
                originsec.style.left=screen.width; //moveorigin to the left
                originsec.style.display="none"; //hide origin
                oriX=0; //reset
                objX=screen.width;
                actualSection=objective;
                rect.style.left=rectXF;
                rectXO=rectXF;
            }else{
                oriX-=20;
                objX-=20;
                rectXO=rectXO+rectSpeed;
                objectivesec.style.left=objX;
                objectivesec.style.right=oriX;
                originsec.style.left=oriX;
                originsec.style.right=objX;
                rect.style.left=rectXO;
            }
  }

}

