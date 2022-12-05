$(function (){

    $(".box1").click(function(){

        $('.contenido1').hide("slow")
        $('.contenido1').show("slow")
        })

    $(".box2").click(function(){

        $('.contenido2').hide("slow")
        $('.contenido2').show("slow")
        })
});









//habilita tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//habilita popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))