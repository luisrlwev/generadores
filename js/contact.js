$(document).ready(function() {

    (function($) {
        "use strict";


        jQuery.validator.addMethod('answercheck', function(value, element) {
            return this.optional(element) || /^\bcat\b$/.test(value)
        }, "type the correct answer -_-");

        // validate contactForm form
        $(function() {
            $('#contactForm').validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 3
                    },
                    subject: {
                        required: true,
                        minlength: 4
                    },
                    tel: {
                        required: true,
                        minlength: 10
                    },
                    email: {
                        required: true,
                        email: true
                    },
                    message: {
                        required: true,
                        minlength: 20
                    }
                },
                messages: {
                    name: {
                        required: "Vamos, tienes nombre, ¿no?",
                        minlength: "Su nombre debe constar de al menos de 3 caracteres"
                    },
                    subject: {
                        required: "Vamos, tienes un asunto, ¿no?",
                        minlength: "Su asunto debe constar de al menos 4 caracteres"
                    },
                    tel: {
                        required: "Vamos, tienes un número, ¿no?",
                        minlength: "Su número debe constar de al menos 10 digitos"
                    },
                    email: {
                        required: "Sin correo electrónico, sin mensaje"
                    },
                    message: {
                        required: "Um ... sí, tienes que escribir algo para enviar este formulario.",
                        minlength: "¿Eso es todo? ¿de verdad?"
                    }
                }
            })
        })

    })(jQuery)
})