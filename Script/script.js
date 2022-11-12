function togglesidebar(){
    if(document.getElementById("sidebar").classList == "sidebar"){
        document.getElementById("sidebar").classList.remove("sidebar");
        document.getElementById("sidebar").classList.add("msidebar");
        document.getElementById("pageMaterial").style.paddingLeft="140px";

        document.getElementById("navbar").style.paddingLeft="100px";

        document.getElementById("pageMaterial").style.transition="1s";
        document.getElementById("navbar").style.transition="1s";
        document.getElementById("sidebar").style.transition="1s";
        document.getElementById("logo").style.transition="0s";
        
        document.getElementById("logo").classList.remove("tempLogo");
        document.getElementById("logo").classList.add("mtempLogo");
        document.getElementById("logo").src="Assets/Logo/eshort.png";
    }
    else{
        document.getElementById("sidebar").classList.remove("msidebar");
        document.getElementById("sidebar").classList.add("sidebar");
        document.getElementById("pageMaterial").style.paddingLeft="320px";

        document.getElementById("navbar").style.paddingLeft="290px";

        document.getElementById("pageMaterial").style.transition="1s";
        document.getElementById("navbar").style.transition="1s";
        document.getElementById("sidebar").style.transition="1s";
        document.getElementById("logo").style.transition="1s";
        
        document.getElementById("logo").classList.remove("mtempLogo");
        document.getElementById("logo").classList.add("tempLogo");
        document.getElementById("logo").src="Assets/Logo/e.png";
    }
}
window.onresize=function()
{
    if (window.innerWidth < 720) {
        document.getElementById("sidebar").classList.remove("sidebar");
        document.getElementById("sidebar").classList.add("msidebar");
        document.getElementById("pageMaterial").style.paddingLeft="140px";

        document.getElementById("navbar").style.paddingLeft="100px";

        document.getElementById("pageMaterial").style.transition="1s";
        document.getElementById("navbar").style.transition="1s";
        document.getElementById("sidebar").style.transition="1s";
        document.getElementById("logo").style.transition="0s";
        
        document.getElementById("logo").classList.remove("tempLogo");
        document.getElementById("logo").classList.add("mtempLogo");
        document.getElementById("logo").src="Assets/Logo/eshort.png";
    }
    if (window.innerWidth > 720) {
        document.getElementById("sidebar").classList.remove("msidebar");
        document.getElementById("sidebar").classList.add("sidebar");
        document.getElementById("pageMaterial").style.paddingLeft="320px";

        document.getElementById("navbar").style.paddingLeft="290px";

        document.getElementById("pageMaterial").style.transition="1s";
        document.getElementById("navbar").style.transition="1s";
        document.getElementById("sidebar").style.transition="1s";
        document.getElementById("logo").style.transition="1s";
        
        document.getElementById("logo").classList.remove("mtempLogo");
        document.getElementById("logo").classList.add("tempLogo");
        document.getElementById("logo").src="Assets/Logo/e.png";
    }
}

function openclassmodal(){
    document.getElementById("bgblur").style.display="";
    document.getElementById("classupdate").style.display="";
}
function closeclassupdate(){
    document.getElementById("bgblur").style.display="none";
    document.getElementById("classupdate").style.display="none";
}

function courseselected(){
    document.getElementById("bgblur").style.display="";
    document.getElementById("studentid").style.display="";
}
function Closecourseselected(){
    document.getElementById("bgblur").style.display="none";
    document.getElementById("studentid").style.display="none";
}


function openstudenteditbox(){
    document.getElementById("bgblur").style.display="";
    document.getElementById("studenteditbox").style.display="";
}
function closestudenteditbox(){
    document.getElementById("bgblur").style.display="none";
    document.getElementById("studenteditbox").style.display="none";
}
function startTime() {
    var today = new Date();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    ap = (hr < 12) ? "<span>AM</span>" : "<span>PM</span>";
    hr = (hr == 0) ? 12 : hr;
    hr = (hr > 12) ? hr - 12 : hr;
    //Add a zero in front of numbers<10
    hr = checkTime(hr);
    min = checkTime(min);
    sec = checkTime(sec);
    document.getElementById("clock").innerHTML = hr + ":" + min + ":" + sec + " " + ap;
    
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}