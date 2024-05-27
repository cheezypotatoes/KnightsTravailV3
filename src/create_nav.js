

function navigation() {
    const list = ["Home.html", "Login.html", "About.html"];

    const nav = document.createElement("nav");

    list.forEach(name => {
        const btn = document.createElement("button");
        btn.innerHTML = name.split(".")[0];
        btn.addEventListener("click", () => {
            console.log(`${name.split(".")[0]} was pressed`);
            window.location.href = name;
        });

        nav.appendChild(btn);
    });

    document.body.appendChild(nav);
}

    
export {navigation}