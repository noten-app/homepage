// Loop through all .aside_versionlist-version

var aside_versionlist_version = document.querySelectorAll('.aside_versionlist-version');

for (var i = 0; i < aside_versionlist_version.length; i++) {
    aside_versionlist_version[i].addEventListener('click', function() {
        openVersion(this.id);
    });
}

// 
// Function: openVersion()
// 
function openVersion(id) {
    for (var i = 0; i < aside_versionlist_version.length; i++) aside_versionlist_version[i].classList.remove('active-version');
    document.getElementById(id).classList.add('active-version');
}