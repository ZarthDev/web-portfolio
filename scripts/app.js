let StateColor = 'Light';

function ShakeImg ( ) {
    let img = document.getElementById('profile-img');

    img.className = 'animate__animated animate__rubberBand';

    setTimeout(function () {
        img.className = '';
    }, 1500);
}

function SetBg ( ) {
    if (StateColor === 'Light') {
        StateColor = 'Dark';

        let elements = Array();
        elements = document.getElementsByClassName('light-bg');

        for (let i = elements.length ; i >= 0 ; i--) {
            if (elements[i] != undefined) {
                elements[i].className = 'dark-bg';
            }
        }
    }else{
        StateColor = 'Light';
        
        let elements = Array();
        elements = document.getElementsByClassName('dark-bg');

        for (let i = elements.length ; i >= 0 ; i--) {
            if (elements[i] != undefined) {
                elements[i].className = 'light-bg';
            }
        }
    }
}

function messagePopUp ( ) {
    if (document.getElementById('message') === null) {
        let messageArea = document.getElementById('contact');
        let message = document.createElement('div');
    
        let messageTittle = document.createElement('h1');
        let messageSpan = document.createElement('span');
        let messageButton = document.createElement('button');
    
        messageTittle.innerHTML = 'CONTATO:';
        messageSpan.innerHTML = '+55 51 98692-8804';
        messageButton.innerHTML = 'Fechar';
    
        messageButton.className = 'btn btn-outline-danger';
    
        messageButton.onclick = function ( ) {
            message.className = 'animate__animated animate__fadeOutLeft';

            setTimeout(function () {
                message.remove();
            }, 2000);
        }
    
        message.id = 'message';
        message.className = 'animate__animated animate__fadeInRight';

        messageArea.appendChild(message);
    
        message.appendChild(messageTittle);
        message.appendChild(messageSpan);
        message.appendChild(messageButton);

        if (StateColor === 'Light') {
            message.style.background = '#F2F0F0';
            message.style.color = '#050505';
        }else{
            message.style.background = '#050505';
            message.style.color = '#F2F0F0';
        }
    }
}