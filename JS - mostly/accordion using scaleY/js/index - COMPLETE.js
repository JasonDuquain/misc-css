var accItem = document.querySelectorAll('.accordionItem');
var accHD = document.querySelectorAll('.accordionItemHeading');

accHD.forEach((el) => el.addEventListener('click', toggleItem));

function toggleItem() {
    var itemClass = this.parentNode.className;
    accItem.forEach((el) => el.className = 'accordionItem close');
    
    if (itemClass == 'accordionItem close') {
        this.parentNode.className = 'accordionItem open';
    }
    
}

