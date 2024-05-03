document.addEventListener('DOMContentLoaded', function() {
    var adviceButton = document.getElementById('advice');
    var closeButton = document.getElementById('closebut');

    if (adviceButton) {
        adviceButton.addEventListener('click', function () {
            document.getElementById('advice-window').style.display = 'block';
        });
    } else {
        console.error('Element #advice not found!');
    }

    if (closeButton) {
        closeButton.addEventListener('click', function () {
            document.getElementById('advice-window').style.display = 'none';
        });
    } else {
        console.error('Element #closebut not found!');
    }

    // Убедитесь, что jQuery и inputmask загружены
    if (jQuery) {
        $(function() {
            $('#phone').inputmask("+380(99) 999-9999"); // Убедитесь, что такой элемент есть
        });
    } else {
        console.error('jQuery is not loaded');
    }
});