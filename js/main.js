$(document).ready(() => {
    const canvas = document.getElementById('main-canvas');
    const splitCanvases = document.getElementsByClassName('split-canvas');
    const ctx = canvas.getContext('2d');
    const ctxs = [];
    for (let i = 0; i < splitCanvases.length; i++) {
        ctxs[i] = splitCanvases[i].getContext('2d');
    }
    const image = new Image();
    image.src = '../img/image.jpg';
    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.drawImage(image, 0, 0, image.width, image.height);
        for (let j = 0; j < splitCanvases.length; j++) {
            splitCanvases[j].width = image.width / 2;
            splitCanvases[j].height = image.height / 2;
        }

        ctxs[0].drawImage(image, 0, 0, image.width / 2, image.height / 2, 0, 0, image.width / 2, image.height / 2);
        ctxs[1].drawImage(image, image.width / 2, 0, image.width / 2, image.height / 2, 0, 0, image.width / 2, image.height / 2);
        ctxs[2].drawImage(image, 0, image.height / 2, image.width / 2, image.height / 2, 0, 0, image.width / 2, image.height / 2);
        ctxs[3].drawImage(image, image.width / 2, image.height / 2, image.width / 2, image.height / 2, 0, 0, image.width / 2, image.height / 2);
    };

    navigator.mediaDevices.getUserMedia({ video: true, audio: false }).then(stream => {
        let video = document.getElementById('main-video');
        video.srcObject = stream;
        /*setInterval(() => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            ctxs[0].drawImage(video, 0, 0, canvas.width / 2, canvas.height / 2, 0, 0, canvas.width / 2, canvas.height / 2);
            ctxs[1].drawImage(video, canvas.width / 2, 0, canvas.width / 2, canvas.height / 2, 0, 0, canvas.width / 2, canvas.height / 2);
            ctxs[2].drawImage(video, 0, canvas.height / 2, canvas.width / 2, canvas.height / 2, 0, 0, canvas.width / 2, canvas.height / 2);
            ctxs[3].drawImage(video, canvas.width / 2, canvas.height / 2, canvas.width / 2, canvas.height / 2, 0, 0, canvas.width / 2, canvas.height / 2);
        }, 200);*/
    }).catch(() => {
        console.error('error');
    });
});