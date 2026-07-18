var items = [];
function Create(...item) {
    items.push(...item);
}

function Read() {
    items.forEach(function (item) {
        console.log(item);
    });
}

function Update(item, index) {
    items[index] = item;
    console.log(items);
}

function Delete(index, number) {
    items.splice(index, number);
    console.log(items);
}

Create("A", "B", "C", "D", "E");
Read();
Update("B", 2);
Delete(2, 2);
