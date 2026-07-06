const message =
"You are the most beautiful, kind, elegant person in this world. ❤️ Every smile of yours makes my day brighter, and every moment with you feels like a beautiful dream. Happy Birthday, my beautiful angel. May your life always be filled with happiness, love, and endless blessings. I will always cherish you. 💖";

function openLetter(){

    document.getElementById("letter").style.display="block";

    document.getElementById("openLetter").style.display="none";

    typeWriter();

    launchConfetti();

    createHearts();

    let music=document.getElementById("bgMusic");

    if(music){
        music.play().catch(()=>{});
    }

}

let i=0;

function typeWriter(){

    if(i<message.length){

        document.getElementById("typing").innerHTML+=message.charAt(i);

        i++;

        setTimeout(typeWriter,45);

    }

}

function createHearts(){

    setInterval(()=>{

        let heart=document.createElement("div");

        heart.className="heart";

        heart.innerHTML="💖";

        heart.style.left=Math.random()*100+"vw";

        heart.style.bottom="-20px";

        heart.style.animationDuration=(Math.random()*3+3)+"s";

        document.body.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },6000);

    },250);

}

function launchConfetti(){

    confetti({

        particleCount:250,

        spread:180,

        origin:{y:0.6}

    });

}
