let item =[245, 230, 300, 233, 235];

for(let i=0;i<item.length;i++){
    let offer = item[i]/10;
    item[i] = item[i]-offer;
}

console.log(item);