let burgerShow = () => {
    let header = document.getElementsByClassName('header')[0];
    let containerData = document.getElementsByClassName('header__container')[0];
    if (window.getComputedStyle(containerData).display == 'none') {
        containerData.style.display = 'flex';
        containerData.style.marginTop = '50px';
        header.style.flexDirection = 'row-reverse';
    } else {
        containerData.style.display = '';
        containerData.style.marginTop = '';
        header.style.flexDirection = '';
    }
}