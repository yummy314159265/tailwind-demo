const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
})

document.addEventListener('click', e => {
    let target = e.target;

    do {
        if(target == nav || target == btn){
            return;
        }

        target = target.parentNode;
    } while (target);

    btn.classList.remove('open');
    nav.classList.remove('flex');
    nav.classList.add('hidden');
})