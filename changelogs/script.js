var aside_versionlist_version = document.querySelectorAll('.aside_versionlist-version');
var changelogIframe = document.getElementById("changelogIframe");

for (var i = 0; i < aside_versionlist_version.length; i++) {
    aside_versionlist_version[i].addEventListener('click', function() {
        openVersion(this.id.toString().replace('select-', ""));
    });
}

// 
// Function: openVersion()
// 
function openVersion(id) {
    for (var i = 0; i < aside_versionlist_version.length; i++) aside_versionlist_version[i].classList.remove('active-version');
    document.getElementById("select-" + id).classList.add('active-version');
    changelogIframe.src = "./versions/" + id + ".html";
}