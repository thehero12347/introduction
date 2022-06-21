document.getElementById("discordJoin").onclick = function (discord) {
        location.href = "https://discord.gg/ZJNV7X7dWw"; 
    };

document.getElementById("github").onclick = function (github) {
location.href = "https://github.com/thehero12347";
};

document.getElementById("home").onclick = function (home) {
  location.href = "index.html";
};

document.getElementById("aboutus").onclick = function (aboutus) {
  location.href = "aboutus.html";
};

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}
