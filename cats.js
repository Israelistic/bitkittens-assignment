document.addEventListener('DOMContentLoaded', function(){

var summonCat = document.querySelector('.summon-cats');
var catBox = document.querySelector(".cat-box");
var cat1 = document.getElementById('cat1');
var cat2 = document.getElementById('cat2');
var cat3 = document.getElementById('cat3');
var catBox1 = document.getElementById('catBox1');
var locationArr = [cat2, cat1, cat3];
    summonCat.addEventListener('click', function() {
        $.ajax({
            url: 'http://bitkittens.herokuapp.com/cats.json',
            method:'GET',
            data:{number:1},
        }).done(function(responseData) {
            console.log(responseData);
            var  catsList = responseData.cats;
            catsList.forEach(function(cat) {
                var imgTag = document.createElement('img');
                var h4 = document.createElement('h4')
                var randomlocation = locationArr[Math.floor(Math.random()*locationArr.length)]
                imgTag.src = cat.photo
                imgTag.alt = cat.name
                h4.innerHTML = imgTag.alt

                randomlocation.append(imgTag, h4);
            })
        })
    })



})
