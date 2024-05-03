$(document).ready(function(){ 
    $('form[name="konsultant"]').on('submit', function(e){ 
        e.preventDefault();  // Отменяем стандартное поведение формы
        var formData = $(this).serialize();  // Сериализация данных формы

        $.ajax({ 
            type: 'POST', 
            url: './serverside/server.js',
            data: formData, 
            success: function(response){ 
                console.log('Успех:', response);
                alert("Данные успешно отправлены!");
            },
            error: function(error){ 
                console.error('Ошибка:', error);
                alert("Ошибка при отправке данных!");
            }
        }); 
    });
});
