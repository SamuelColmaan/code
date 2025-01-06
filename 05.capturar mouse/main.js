$(document).ready(()=>{
    $(document).mousemove((event)=>{
        // variaveis que vao conter as posiçoes do mouse
        let pmx = event.pageX
        let pmy = event.pageY
        $('#texto').text('Position x: '+ pmx +'px ' + 'Position y: '+ pmy + 'px')
        /* if(pmx > 500)
            console.log('pos x > que 500px') */
    })
})