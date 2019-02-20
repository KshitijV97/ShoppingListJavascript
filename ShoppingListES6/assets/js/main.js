const itemToAdd = document.getElementById("itemToAdd"); 
const addButton = document.getElementById("addButton");
const itemList = document.getElementById("list");

class Item{
    constructor(itemName){
        // console.log(itemName);
        this.name = itemName;
        this.create();
    }

    create(){
        let listItem = document.createElement("DIV");
        listItem.classList.add("list-item");

        // Creating text for every entry
        let input = document.createElement("input");
        input.type = "text"; 
        input.classList.add("item-name");
        input.value = this.name; 
        input.disabled = true;

        // Creating Update/Remove button for every entry
        let actions = document.createElement("DIV");
        actions.classList.add("item-actions");

        let updateButton = document.createElement("BUTTON");
        updateButton.classList.add("update");
        updateButton.innerText = "Update";
        updateButton.addEventListener("click",() => this.update(input));

        let removeButton = document.createElement("BUTTON")
        removeButton.classList.add("remove");
        removeButton.innerText = "Remove";
        removeButton.addEventListener("click",() => this.remove(listItem));

        actions.appendChild(updateButton); // Append the two created buttons to actions div tag
        actions.appendChild(removeButton);

        listItem.appendChild(input); // Append the text and buttons to List entry
        listItem.appendChild(actions);

        itemList.appendChild(listItem); // Add the created DIV to 'list' div
    }

    update(input){
        input.disabled = !input.disabled;
    }
    
    remove(listItem){
        listItem.parentNode.removeChild(listItem);
    }
}

// new Item("Item 1");
// new Item("Milk");\

addButton.addEventListener("click", () => newItem());

function newItem(){
    if(itemToAdd.value != ""){
        new Item(itemToAdd.value);
        itemToAdd.value = ""; // Clear input area once user clicks button
    }
}