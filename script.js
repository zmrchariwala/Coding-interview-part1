window.onload = process;
function process(){
    //Get all data into drop down list
    var heading = document.getElementById("team_members");
    heading.innerHTML = "";
    var xmlhttp = new XMLHttpRequest();
    //send a request to website
    var url = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";
    xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = xmlhttp.responseText;
        //cc stores how many data are there in json file
        var cc = Object.keys(JSON.parse(myArr)).length;
        for(var i=1;i<=cc;i++)
        {
            //display it to the drop-down list
            heading.innerHTML += "<option value="+JSON.parse(myArr)[i].employeeid+">"+JSON.parse(myArr)[i].employeefname+"</option>";
            console.log(JSON.parse(myArr)[i].employeeid);
        }    
    }
     };
     xmlhttp.open("GET", url, true);
     xmlhttp.send();
}
//when user click on show after selecting which team member detail user whats to see
function show()
{
    var profile_name = document.getElementById("profile_name");
    var profile_desc = document.getElementById("profile_desc");
    var crown_size = document.getElementById("crown");
    var profile_img = document.getElementById("profile");
    var btn = document.getElementById("coding_button");
    //Intially its empty so previous value won't effect new value
    profile_img.src = "";
    profile_desc.innerHTML = "";
    profile_name.innerHTML = "";
    //stores id of that team member
    var id = document.getElementById("team_members").value;
    var xmlhttp = new XMLHttpRequest();
    var url = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";
    xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        myArr = xmlhttp.responseText;
        profile_name.innerHTML = "<h2>"+JSON.parse(myArr)[id].employeefname+ " "+ JSON.parse(myArr)[id].employeelname +"</h2>";
        //profile_name.innerHTML += "<h2>"+JSON.parse(myArr)[id].employeelname+"</h3>";
        profile_desc.innerHTML += "<h3>"+JSON.parse(myArr)[id].employeebio+"</h3>"
        if(JSON.parse(myArr)[id].employeeisfeatured == 1)
        {
            crown_size.style.display = "block";
        }
        else
        {
            crown_size.style.display = "none";
        }
        profile_img.src = "http://sandbox.bittsdevelopment.com/code1/employeepics/"+id+".jpg";
        console.log(JSON.parse(myArr)[id].roles[0].roleid);
        var role = JSON.parse(myArr)[id].roles[0].rolename;
        console.log(role);
        var rolecode = JSON.parse(myArr)[id].roles[0].rolecolor;
        btn.style.display = "block";
        btn.innerHTML = role;
        btn.style.backgroundColor = rolecode;
        btn.style.text = role;
    }
     };this
     xmlhttp.open("GET", url, true);
     xmlhttp.send();
}