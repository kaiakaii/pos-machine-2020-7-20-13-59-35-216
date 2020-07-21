function printReceipt(barcodes) {
    
    let allItems = loadAllItems(barcodes);
    let barcodeCount = countBarcodes(barcodes);
    let items = extractItemsByDB(barcodeCount,allItems);
    calculateAllItems(items);
}
function loadAllItems(barcodes){
    
     const allItems=[
        {
           barcode: 'ITEM000000',
           name: 'Coca-Cola',
           price: 3
         },
         {
           barcode: 'ITEM000001',
           name: 'Sprite',
           price: 3
         },
         {
           barcode: 'ITEM000002',
           name: 'Apple',
           price: 5
         },
         {
           barcode: 'ITEM000003',
           name: 'Litchi',
           price: 15
         },
         {
           barcode: 'ITEM000004',
           name: 'Battery',
           price: 2
         },
         {
           barcode: 'ITEM000005',
           name: 'Instant Noodles',
           price: 4
         }
     ];
     return allItems;
}
function countBarcodes(barcodes) {
    let itemCount ={};
    for (var index in barcodes){
        var barcode = barcodes[index];
        if(itemCount[barcode]){
            itemCount[barcode]++;
        }else{
            itemCount[barcode] = 1;
        }
        
    }
    return itemCount;
}
function extractItemsByDB(barcodeCount,allItems){
    let extractItems = [];
    for (let x in barcodeCount){
        for(let y in allItems ){
            if (x==allItems[y].barcode){
                let item = {};
                item.name=allItems[y].name;
                item.price=allItems[y].price;
                item.num = barcodeCount[x];
                extractItems.push(item);
            }
        }
    }
    return extractItems;
}
function calculateAllItems(items){
    let msg = "\n***<store earning no money>Receipt ***\n";
    for (let i = 0; i < items.length; i++) {
        msg += "Name: "+items[i].name+", Quantity: "+items[i].num+", Unit price: "+items[i].price+" (yuan), Subtotal: "+items[i].num*items[i].price+" (yuan)\n";
    }
    let total = calculateTotal(items);
    msg += "----------------------\n";
    msg += "Total: "+total+" (yuan)\n";
    msg +="**********************";
    console.log(msg);
}

function calculateTotal(items){
    let total = 0;
    for (let i in items){
        total += items[i].num*items[i].price;
    }
    return total;
}

module.exports = {
    printReceipt
};