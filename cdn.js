 function embedForm(backgroundColor, isAutoHeight, height, width, slug) {
        var myForm = document.getElementById("myForm");

        myForm.innerHTML = `<iframe id="myIframe" width="${width}" src="http://localhost:8080/p/${slug}" frameborder="0"></iframe> `
        
        var iframe = document.getElementById("myIframe");
        iframe.onload = function () {changeStuff(backgroundColor, height, isAutoHeight);}
        
      function changeStuff(iframe_color, iframe_height, autoHeight) {
        const doc = iframe.contentWindow;
        const obj = { background: iframe_color };
        setTimeout(() => {
          doc.postMessage(obj, "*");
        }, 100);

        if (autoHeight) {
          window.addEventListener(
            "message",
            function (e) {
              iframe.style.height = e.data + 'px';
              console.log(e.data);
            },
            false
          );
        } else {
          iframe.style.height = iframe_height + 'px';
        }
      }
      }      
