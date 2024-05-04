document.addEventListener("DOMContentLoaded", function(){ 
    $('form[name="consultationForm"]').on('submit', function(e){ 
        e.preventDefault();  // Отменяем стандартное поведение формы
        var form = $(this);
        var action = form.attr('action');
        var method = form.attr('method').toUpperCase();
        var formData = $(this).serialize();  // Сериализация данных формы

        var request = new XMLHttpRequest();
        request.open(method, action);

        request.onreadystatechange = function(){
            if (request.readyState === XMLHttpRequest.DONE) {
                if (request.status === 200) {
                    alert("Данные успешно отправлены!");
                } else {
                    alert("Ошибка при отправке данных!");
                }
            }
        };

        request.send(formData);
    });
});

