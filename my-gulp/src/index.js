var xhr = new XMLHttpRequest()
xhr.open('GET','https://fanyi.baidu.com/mtpe/user/getInfo?_=1649235558573')
xhr.send()
xhr.onload = function () {
    console.log(xhr.responseText)
    console.log(111)
}
