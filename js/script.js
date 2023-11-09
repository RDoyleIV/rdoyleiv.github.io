let allIcons = document.querySelectorAll('[name="themeToggle"]');
for(allIcons2 of allIcons){allIcons2.addEventListener('click', changeTheme,true)}
let themeCookie = new RegExp("theme-dark=true"); 

function changeTheme(event) {
    if (event) {
        if(document.querySelector('i#btnTheme2').classList.contains('text-light')) {
            document.cookie = 'theme-dark=true;';
            document.cookie = 'theme-light=; Max-Age=0;';
            document.querySelector('i#btnTheme2').classList.replace('text-light', 'text-dark');
            document.querySelector('link[href="css/light.css"]').setAttribute('href', 'css/dark.css');
            document.querySelector('i.fa-toggle-off').classList.replace('fa-toggle-off', 'fa-toggle-on');
        }
        else {
            document.cookie = 'theme-light=true;';
            document.cookie = 'theme-dark=; Max-Age=0;';
            document.querySelector('i#btnTheme2').classList.replace('text-dark', 'text-light');
            document.querySelector('link[href="css/dark.css"]').setAttribute('href', 'css/light.css');
            document.querySelector('i.fa-toggle-on').classList.replace('fa-toggle-on', 'fa-toggle-off');
        }
    }
};

if(document.cookie.match(themeCookie)) {
    document.querySelector('i#btnTheme2').classList.add('text-dark');
    document.querySelector('link[href="css/light.css"]').setAttribute('href', 'css/dark.css');
}
else {
    document.querySelector('i#btnTheme2').classList.add('text-light');
    document.querySelector('link[href="css/dark.css"]').setAttribute('href', 'css/light.css');
}

// Fetch api/function outline for future .json use.
let contentDiv = document.getElementById('moreContent');
contentDiv.addEventListener('click', async () => {
    await fetch('js/test-data.json')
    .then(response => response.json())
    .then(thisData => dataList(thisData))
    .catch(err => console.log(err))
});

//fetch function for stored data
async function dataList(thisData) {
    const dataJson = Object.values(thisData);

    console.log(dataJson[0]);
    contentDiv.innerHTML += dataJson[0].hello;
}