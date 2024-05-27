import { navigation } from "./create_nav";

navigation();

function create_input_labels(){
    const labels = ["Username", "Password"];

    const container = document.createElement("div");

    labels.forEach(label =>{
        container.appendChild(document.createElement("label")).innerHTML = label;
        container.appendChild(document.createElement("input"));
    })

    container.appendChild(document.createElement("button")).innerHTML = "Submit";
    document.body.appendChild(container);
}

create_input_labels();