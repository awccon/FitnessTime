$('.carousel').carousel({
    interval: 5000
  })

$(window).ready(function(){
    $('.resume-link').click(function(){
        document.body.classList.add('no-scroll');
        let doc = document.createElement("div");
        let messageBox = document.createElement("div");
        let closeBtn = document.createElement("button");

        messageBox.style.position = "absolute";
        messageBox.style.borderRadius = "5px";
        messageBox.style.color = "black";
        messageBox.style.top = "50%";
        messageBox.style.left = "50%";
        messageBox.style.transform = "translate(-50%, -50%)";
        messageBox.innerHTML = `<span>Please go to this linkedIn <a href="https://www.linkedin.com/in/akmalkamolov">link</a> to get a copy of my resume</span>`;
        messageBox.style.backgroundColor = "white";
        messageBox.style.padding = "15px";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "-40px";
        closeBtn.style.right = "-60px";
        closeBtn.onclick = function(){
            $(".model-window").remove();
            document.body.classList.remove('no-scroll');
        }
        closeBtn.innerText = "Close";
        closeBtn.style.margin="2px 10px";
        closeBtn.style.border="1px solid gray";
        messageBox.appendChild(closeBtn);
        doc.className = "model-window";
        doc.style.position = "fixed";
        doc.style.top = 0;
        doc.style.left = 0;
        doc.style.width="100%";
        doc.style.height = "100%";
        doc.append(messageBox);
        document.body.appendChild(doc);
    });
})