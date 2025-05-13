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

$('.sobre').click(function(){
    $('html').animate({
        scrollTop: $('#sobre').offset().top
    }, 1000);
});


$(document).ready(function(){
            $('#carousel-images').slick({
                autoplay: true,
                dots: true,
                arrows: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
        });

            $('.menu-hamburger').click(function(){
                $('nav').slideToggle();
            });

            $('#telefone').mask('(00) 00000-0000');

            $('form').validate({
                rules: {
                    nome: {
                        required: true,
                        minlength: 3
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    telefone: {
                        required: true
                    },
                    'veiculo-de-interesse': {
                        required: true
                    },
                    mensagem: {
                        required: true,
                        minlength: 10
                    }
                },
                messages: {
                    nome: {
                        required: "Por favor, insira seu nome.",
                        minlength: "Seu nome deve ter pelo menos 3 caracteres."
                    },
                    email: {
                        required: "Por favor, insira seu e-mail.",
                        email: "Por favor, insira um e-mail válido."
                    },
                    telefone: {
                        required: "Por favor, insira seu telefone."
                    },
                    'veiculo-de-interesse': {
                        required: "Por favor, informe o veículo de interesse."
                    },
                    mensagem: {
                        required: "Por favor, escreva uma mensagem.",
                        minlength: "Sua mensagem deve ter pelo menos 10 caracteres."
                    }
                },
                submitHandler: function(form) {
                    console.log(form);
                },
                invalidHandler: function(event, validador) {
                    let camposInvalidos = validador.numberOfInvalids();
                    console.log("Número de campos inválidos: " + camposInvalidos);
                    if (camposInvalidos) {
                        alert("Por favor, preencha todos os campos obrigatórios corretamente.");
                    }
                }
            });

            $('.lista-veiculos button').click(function() {
                const destino = $('#contato');

                const nomeVeiculo = ($(this).parent().find('h3').text());

                $('#veiculo-de-interesse').val(nomeVeiculo);

                $('html').animate({
                    scrollTop: destino.offset().top
                }, 1000, function() {
                    destino.addClass('highlight');
                    setTimeout(function() {
                        destino.removeClass('highlight');
                    }, 2000);
                })

            });
        });