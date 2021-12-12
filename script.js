const glink = document.getElementById("glink");
const btn = document.getElementById("btn");
const downloadLink = document.getElementById("download-link");
const audioLink = document.getElementById("embed-audio");
const videoLink = document.getElementById("copy-video");

const copy = document.getElementById("copy");
const copyAudio = document.getElementById("copy-audio");
const copyVideo = document.getElementById("copy-video");

const gdrivelink = (e) => {
    e.preventDefault();
    const glinkValue = glink.value;
    const confirmLink = glinkValue.includes("https://drive.google.com/file/d/");
    if (confirmLink) {
        const embedLink = glinkValue
            .replace(
                'https://drive.google.com/file/d/',
                'https://drive.google.com/uc?export=download&id='
            )
            .replace('/view?usp=sharing', '');
        downloadLink.value = embedLink;

        copy.addEventListener(
            "click",
            () => {
                downloadLink.select();
                document.execCommand("copy");
                copy.textContent = "Copied";
                setTimeout(() => {
                    copy.textContent = "Copy";
                });
            },3000);

        const audio = '<audio width="300" height="32" controls="controls" src="';
        const audioFollow = '" type="audio/mp3"> </audio>';

        audioLink.value = `${audio}${downloadLink.value}${audioFollow}`;

        copyAudio.addEventListener(
            "click",
            () => {
                audioLink.select();
                document.execCommand("copy");
                copyAudio.TextContent = "Copied";
                setTimeout(() => (copyAudio.textContent = "copy"));
            },
            3000
        );

        const getVideoLink = glink.value.replace('/view?usp=sharing', '');

        const video = '<iframe src="';
        const videoFollow = '/preview" width="500" height="300"> </iframe>';

        videoLink.value = `${video}${getVideoLink}${videoFollow}`;

        copyVideo.addEventListener('click', () => {
            videoLink.select();
            document.execCommand('copy');
            copyVideo.textContent = 'Copied';
            setTimeout(() => {
                copyVideo.textContent = 'Copy';
            }, 3000);
        });
    }
    else {
        alert('Invalid Link');
    }
}
  
    



    btn.addEventListener("click", gdrivelink);
