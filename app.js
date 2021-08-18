var minus = document.getElementById('minus')
minus.addEventListener('click', function () {

   updateNumber('number')
   var num = document.getElementById('number').value
   var numNum = parseFloat(num)
   var iphonePrice = document.getElementById('iphonePrice').innerText
   var iphonePriceNum = parseFloat(iphonePrice)
   var total = numNum * 1219
   document.getElementById('iphonePrice').innerText = total

   var casePrice=document.getElementById('casePrice').innerText
   var casePriceNum=parseFloat(casePrice)
   var subTotal=casePriceNum+total
   document.getElementById('setTotal').innerText=subTotal


   document.getElementById('total').innerText=subTotal

})

var secondMinus = document.getElementById('2ndMinus')
secondMinus.addEventListener('click', function () {

   updateNumber('2ndNumber')
   var num = document.getElementById('2ndNumber').value
   var numNum = parseFloat(num)
   var iphonePrice = document.getElementById('casePrice').innerText
   var iphonePriceNum = parseFloat(iphonePrice)
   var total = numNum * 59
   document.getElementById('casePrice').innerText = total



   var iphonePrice=document.getElementById('iphonePrice').innerText
   var iphonePriceNum=parseFloat(iphonePrice)
   var subTotal=iphonePriceNum+total
   document.getElementById('setTotal').innerText=subTotal

   document.getElementById('total').innerText=subTotal

})





function updateNumber(id) {

   var number = document.getElementById(id).value
   var numberNum = parseFloat(number)
   var changedNumber = numberNum - 1
   document.getElementById(id).value = changedNumber
   if (changedNumber <= 1) {
      document.getElementById(id).value = 1
   }
}








var plus = document.getElementById('plus')
plus.addEventListener('click', function () {

   updatePositiveNum('number')
   var num = document.getElementById('number').value
   var numNum = parseFloat(num)
   var iphonePrice = document.getElementById('iphonePrice').innerText
   var iphonePriceNum = parseFloat(iphonePrice)
   var totalPrice = numNum * 1219
   document.getElementById('iphonePrice').innerText = totalPrice

   var casePrice=document.getElementById('casePrice').innerText
   var casePriceNum=parseFloat(casePrice)
   var subTotal=totalPrice+casePriceNum
   document.getElementById('setTotal').innerText=subTotal


   document.getElementById('total').innerText=subTotal
})







var secondPlus = document.getElementById('2ndPlus')
secondPlus.addEventListener('click', function () {
   updatePositiveNum('2ndNumber')
   var num = document.getElementById('2ndNumber').value
   var numNum = parseFloat(num)
   var iphonePrice = document.getElementById('casePrice').innerText
   var casePriceNum = parseFloat(iphonePrice)
   var totalPrice = numNum * 59
   document.getElementById('casePrice').innerText = totalPrice

   var phonePrice=document.getElementById('iphonePrice').innerText
   var phonePriceNum=parseFloat(phonePrice)
   var subTotal=totalPrice+phonePriceNum
   document.getElementById('setTotal').innerText=subTotal
   

   document.getElementById('total').innerText=subTotal
})


function updatePositiveNum(id) {

   var number = document.getElementById(id).value
   var numberNum = parseFloat(number)
   var changedNumber = numberNum + 1
   document.getElementById(id).value = changedNumber

}











