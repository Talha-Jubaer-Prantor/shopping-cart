var minus=document.getElementById('minus')
    minus.addEventListener('click',function () {
        
       updateNumber('number')
       
    })

 var secondMinus=document.getElementById('2ndMinus')
 secondMinus.addEventListener('click',function () {
        
       updateNumber('2ndNumber')
       
    })


    function updateNumber(id) {
        
    var number=document.getElementById(id).value
    var numberNum= parseFloat(number)
    var changedNumber=numberNum-1
     document.getElementById(id).value=changedNumber
    }


var plus=document.getElementById('plus')
    plus.addEventListener('click',function () {
      
        updatePositiveNum('number')
    })

var secondPlus=document.getElementById('2ndPlus')
    secondPlus.addEventListener('click',function() {
        updatePositiveNum('2ndNumber')
    })


  function updatePositiveNum(id) {

    var number=document.getElementById(id).value
    var numberNum=parseFloat(number)
    var changedNumber=numberNum+1
    document.getElementById(id).value=changedNumber

  }