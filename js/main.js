const r = async (u) => {
    const rp = await fetch(u);
    return await rp.text()
}


const d = (c) => {
    window.addEventListener("DOMContentLoaded", () => {
        c();
    })
}

const u = (_) => {
    let l = document.location.hash.slice(1);
    if (!l) {
        l = 'index';
    }
    r(`/pages/${l}.md`).then( (md) => {
            document.body.innerHTML = _.makeHtml(md);
        }
    );
}


d( () => {
    r('https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min.js').then( (js) => {
        eval(js);
        const c = new showdown.Converter();
        u(c);
    });
})
