// alert(123)
let number = document.querySelectorAll('td>span.number');
let minus = document.querySelectorAll('td>span.minus');
let plus = document.querySelectorAll('td>span.plus');
let remove = document.querySelectorAll('td>span.remove');
let rowTable = document.querySelectorAll('tr.rowTable');
let price = document.querySelectorAll('td.price');
let tax = document.querySelectorAll('td.tax');
let taxMoney = document.querySelectorAll('td.taxMoney');
let discount = document.querySelectorAll('td.discount')
let totalItem = document.querySelectorAll('td.totalItem');
let totalMoneyFinal = document.querySelector('td.totalMoneyFinal');
let totalTaxFinal = document.querySelector('td.totalTaxFinal');
let discountMoney = document.querySelectorAll('td.discountMoney')

for (let i = 0; i < minus.length; i++) {
    plus[i].onclick = function () {
        // tăng thêm 1 đơn vị
        var numberCurrent = parseInt(number[i].innerHTML);
        var newNumber = numberCurrent += 1

        var priceCurrent = parseFloat(price[i].innerHTML.slice(1));
        var taxReferent = parseFloat(tax[i].innerHTML.slice(0, 2)) / 100;
        var discountReferent = parseFloat(discount[i].innerHTML.slice(0, 1)) / 100;
        number[i].innerHTML = newNumber;

        var taxnew = numberCurrent * priceCurrent * taxReferent;
        taxMoney[i].innerHTML = `$${taxnew}`;

        if (isNaN(discountReferent)) {
            var totalnew = numberCurrent * priceCurrent + taxnew - (numberCurrent * priceCurrent) * 0;
            totalItem[i].innerHTML = `$${totalnew}`;
            var discountMoneyItem = numberCurrent * priceCurrent*0;
            discountMoney[i].innerHTML = `$${discountMoneyItem}`;
        } else {
            var totalnew = numberCurrent * priceCurrent + taxnew - (numberCurrent * priceCurrent) * discountReferent;
            totalItem[i].innerHTML = `$${totalnew}`;
            var discountMoneyItem = numberCurrent * priceCurrent*discountReferent;
            discountMoney[i].innerHTML = `$${Math.round(discountMoneyItem)}`;
        }

        // console.log('discountReferent',discountReferent)
        // return totalItem;

        // Tính tổng tiền toàn bộ khi tăng món
        var sum = 0;
        for (let item of totalItem) {
            var valueToltalItem = parseFloat(item.innerHTML.slice(1));
            sum+= valueToltalItem;
        }
        totalMoneyFinal.innerHTML = `$${sum}`;


        // Tính thuế khi tăng món
        var sumTaxnew = 0;
        for(let item2 of taxMoney){
            var valueTax = isNaN(parseFloat(item2.innerHTML.slice(1)))? 0 : parseFloat(item2.innerHTML.slice(1));
            sumTaxnew +=valueTax;
            console.log(valueTax);
        }
        totalTaxFinal.innerHTML = `$${sumTaxnew}`;

        // console.log(taxMoney);


    }

    minus[i].onclick = function () {
        var numberCurrent = parseInt(number[i].innerHTML);
        if (numberCurrent > 1) {
            number[i].innerHTML = numberCurrent - 1;
        }

        var priceCurrent = parseFloat(price[i].innerHTML.slice(1));
        var taxReferent = parseFloat(tax[i].innerHTML.slice(0, 2)) / 100;
        var discountReferent = parseFloat(discount[i].innerHTML.slice(0, 1)) / 100;

        var taxnew = numberCurrent * priceCurrent * taxReferent;
        taxMoney[i].innerHTML = `$${taxnew}`;

        if (isNaN(discountReferent)) {
            var totalnew = numberCurrent * priceCurrent + taxnew - (numberCurrent * priceCurrent) * 0;
            totalItem[i].innerHTML = `$${totalnew}`;
            var discountMoneyItem = numberCurrent * priceCurrent*0;
            discountMoney[i].innerHTML = `$${discountMoneyItem}`;
        } else {
            var totalnew = numberCurrent * priceCurrent + taxnew - (numberCurrent * priceCurrent) * discountReferent;
            totalItem[i].innerHTML = `$${totalnew}`;
            var discountMoneyItem = numberCurrent * priceCurrent*discountReferent;
            discountMoney[i].innerHTML = `$${Math.round(discountMoneyItem)}`;
        }
        
        // Tính tổng tiền toàn bộ khi giảm món
        var sum = 0;
        for (let item of totalItem) {
            var valueToltalItem = parseFloat(item.innerHTML.slice(1));
            sum+= valueToltalItem;
            console.log(valueToltalItem)
            console.log('sum',sum);
        }
        totalMoneyFinal.innerHTML = `$${sum}`;


        // Tính thuế khi giảm món
        var sumTaxnew = 0;
        for(let item2 of taxMoney){
            var valueTax = isNaN(parseFloat(item2.innerHTML.slice(1)))? 0 : parseFloat(item2.innerHTML.slice(1));
            sumTaxnew +=valueTax;
            console.log(valueTax);
        }
        totalTaxFinal.innerHTML = `$${sumTaxnew}`;

        // console.log(taxMoney);

    }

    // Xóa
    remove[i].onclick = function () {
        rowTable[i + 1].style.display = 'none';
    }











}
// let i =0;
// while(i<100000){
//     // console.log('The random: ',Math.random()*100);
//     // // console.log(123);
//     // i+=0.5;
// }