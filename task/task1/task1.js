let value=0

function update() {
    document.getElementById('number').textContent=value
}

function increment(){
    value++
    update()
}

function decrement(){
    value--
    update()
}

function reset(){
    value=0
    update()
}