let total = 0;
let discount = 0;
function handleCLikBtn(target) {
    const selectedItemsContainer = document.getElementById('selected-items');
    const itemName = target.parentNode.childNodes[1].innerText;
    const count = selectedItemsContainer.childElementCount;
    if(count > 4){
        alert('Please Only 5 Items');
        return;
    }
    const li = document.createElement('li');
    li.innerText = (count + 1) + "." + " " + itemName;
    li.classList.add('item');
    selectedItemsContainer.appendChild(li)
    const price = target.parentNode.childNodes[5].innerText.split(" ")[1];
    total = parseFloat(total) + parseFloat(price);
    document.getElementById('total').innerText = total;
    // const discountDollar = (total * 20)/ 100;
    // discount = parseFloat(discount) + parseFloat(discountDollar);
    // document.getElementById('discount').innerText = discount;
    // document.getElementById('grand-total').innerText = total - discountDollar;

}
document.getElementById('20%').addEventListener('click', function () {
    const inputValue = document.getElementById('hero').value;
    const totalText = document.getElementById('total').innerText;
    const total = parseFloat(totalText);
    document.getElementById('hero').value = '';
    if (inputValue === 'HERO') {
        const totalText = document.getElementById('total').innerText;
        const total = parseFloat(totalText);
        let discount = 0;
        const discountDollar = (total * 20) / 100;
        discount = parseFloat(discount) + parseFloat(discountDollar);
        document.getElementById('discount').innerText = discount;
        document.getElementById('grand-total').innerText = total - discountDollar;
        
    }else{
        alert('Please Input HERO');
    }

})
const container = document.getElementById('selected-items');
const item = container.getElementsByTagName('li');
let textArray = [];
for (var i = 0; i < item.length; i++) {
    textArray.push(item[i].innerHTML);
}
console.log(textArray);






