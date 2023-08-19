let total = 0;

function addToCart(target) {
    const selectedItemsContainer = document.getElementById('cart-items');
    const cartItem = target.parentNode.childNodes[1].childNodes[3].childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = cartItem;
    li.classList.add('list-decimal');
    selectedItemsContainer.appendChild(li);
    const price = target.parentNode.childNodes[1].childNodes[3].childNodes[3].childNodes[5].innerText.split(" ")[0];
    const myButton = document.getElementById("myBtn");
    const couponBtn = document.getElementById('coupon-btn')
    total = (parseFloat(total) + parseFloat(price)).toFixed(2);
    if (total > 0) {
        myButton.removeAttribute('disabled');
    }
    if (total >= 200) {
        couponBtn.removeAttribute('disabled');
    }
    document.getElementById('total').innerText = total;
}

document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponInputValue = document.getElementById('coupon').value;
    document.getElementById('coupon').value = '';
    
    if (couponInputValue === 'SELL200'){
        const totalText =  document.getElementById('total').innerText;
        const totalValue = parseFloat(totalText);
        let discount = 0;
        const discountTK = (total * 20) / 100;
        discount = (parseFloat(discount) + parseFloat(discountTK)).toFixed(2);
        document.getElementById('discount-amount').innerText = discount;
        document.getElementById('grand-total').innerText = (total - discountTK).toFixed(2);
    }
    

})
document.getElementById('go-home').addEventListener('click', function(){
    window.location.href = 'index.html';
})