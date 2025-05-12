// Abrir política de privacidade
$('.link-politica').click(function(e){
    e.preventDefault();
    $('#politica-privacidade').fadeIn(300);
});

// Fechar política
$('.fechar-politica').click(function(){
    $('#politica-privacidade').fadeOut(300);
});

// Fechar ao clicar fora do conteúdo
$(document).mouseup(function(e) {
    var container = $(".politica-content");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        $('#politica-privacidade').fadeOut(300);
    }
});

