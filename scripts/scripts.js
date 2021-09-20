
var headerttl = document.querySelector('#header-zone.l-wrapper,h1');
var header = document.getElementById('header-zone');
var logo = document.getElementById('header-logo');
var y = 0;

window.addEventListener('scroll', function(e){
    y = window.scrollY;
    if (y > 100){
        ouvrir_header(y);
}
    else if (y < 100){
        
        fermer_header(y);
    }
})

function fermer_header(y){
    headerttl.textContent= 'Production, vente et dégustation de vin | Domaine Mercier, Pays de la Loire';
    header.className = '';
    logo.className = '';
}

function ouvrir_header(y){
    headerttl.textContent = '';
    header.className = 'header--is-scrolled';
    logo.className = 'logo--is-scrolled'; 

}



var btnMenuBurg = document.getElementsByClassName('js-toggleMenuBurg');
var btnSubMenu = document.getElementsByClassName('js-toggleSubMenu');
var menuTop = document.getElementById('menu-top');

btnMenuBurg[0].addEventListener('click', toggle_MenuTop);


for ( let i = 0; i<btnSubMenu.length; i++){
    btnSubMenu[i].addEventListener('click', toggle_subMenu);
}



    
function toggle_MenuTop(e){
    let test = btnMenuBurg[0].className.indexOf(' is-on');
    let classStr = btnMenuBurg[0].className;
    if (test !== -1){
        btnMenuBurg[0].className = classStr.slice(0, test) + classStr.slice(test+6);   
        menuTop.className = '';
    }
    else if (test === -1){
        classStr += ' is-on';
        btnMenuBurg[0].className = classStr;
        menuTop.className += ' is-on';
    }

}

    
function toggle_subMenu(e){
    let test = this.className.indexOf(' is-on');
    let classStr = this.className;
    if (test !== -1){
        this.className = classStr.slice(0, test) + classStr.slice(test+6);   
    }
    else if (test === -1){
        classStr += ' is-on';
        this.className = classStr;
    }

}



