(function(){var e="//poweredby.jads.co/",k="//i.jads.co/jsclients/jac.js",f=this,g=document,l=window,i=window.addEventListener?"addEventListener":"attachEvent",j=window[i],q=i=="attachEvent"?"onmessage":"message",p=!0,h=["1","7","6","l","i","9","0","z","b","8","3","r","f","d","o","h","c","j","e","k","s","w","m","2","x","4","v","g","a","p","t","u","q","5","y","n"],c="",o="",d=Math.random();var n=Math.floor(),b=new Date().getTime()/1000;GS=function(m,r){if(m!=null){if(g.defaultView&&g.defaultView.getComputedStyle){return g.defaultView.getComputedStyle(m,null)[r]}else{if(m.currentStyle){return m.currentStyle[r]}else{return m.style[r]}}}},HZ=function(){var m=g.getElementsByTagName("*");return m.length},Xa=/^([0-9.]+)px$/,Ya=/^(-?[0-9.]{1,30})$/,Za=function(m){return Ya.test(m)&&(m=Number(m),!isNaN(m))?m:null};Be=function(s,m){var r=g.createElement(s);for(x in m){r.setAttribute(x,m[x])}return r};ShSh=function(r){var s,m,t;for(t=r.length;t;t--){s=Math.floor(Math.random()*t);m=r[t-1];r[t-1]=r[s];r[s]=m}h=r};Rn=function(r){if(p){var m=r.toString().split("");var s="";for(x in m){s=s+h[m[x]]}return s}else{return"abj_"+r}};MA=function(){c=Rn(Math.floor(d*((b*2)-b)+b));var m=GS(document.body,"width"),s=GS(document.body,"height");var t={id:c,style:"border:0;padding:0;margin:0;width:1px;height:1px;display:inline-block;clear:none;position:absolute;left:-"+m+";top:"+s+";"},r=Be("div",t);document.body.appendChild(r)},cV=function(s){var r=s.getBoundingClientRect();var m=Math.max(g.documentElement.clientHeight,l.innerHeight);return!(r.bottom<0||r.top-m>=0)};re=function(m){try{return(null!==Za(m.getAttribute("width"))&&m.setAttribute("width",0),null!==Za(m.getAttribute("height"))&&m.setAttribute("height",0),m.style.width="0px",m.style.height="0px")}catch(r){}};GA=function(m){for(x in m){if(re(g.getElementById(m[x].adzone))){mhz=HZ();var t=m[x],v=t.adzone,u=Rn(v),w=g.getElementById(v).getAttribute("data-width"),y=g.getElementById(v).getAttribute("data-height");var s={id:u,style:"z-index: "+mhz+"; border:0; background-color:transparent; height: "+y+"px; width: "+w+"px; position:relative; visibility: hidden; clear: both;",frameborder:"0",marginheight:"0",marginwidth:"0",scrolling:"no",height:y,width:w,allowtransparency:"true",src:e+"adshow.php?adzone="+v};t.ifrm=Be("iframe",s);Ae(v,t.ifrm);t.ifrm.style.visibility="visible";var r=g.getElementById(c);t.ifrm.ael={x:GS(r,"left").replace("px",""),y:GS(r,"top").replace("px",""),ox:GS(t.ifrm,"left").replace("px",""),oy:GS(t.ifrm,"top").replace("px",""),mz:GS(t.ifrm,"z-index")};g.getElementById(u).addEventListener("mouseover",function(z){this.style.zindex=HZ()});g.getElementById(u).addEventListener("mouseout",function(z){this.style.zindex=this.ael.mz});g.getElementById(u).addEventListener("click",function(A){if(!cV(this)){var z=""}});rPE(g.getElementById(v))}}};Ae=function(m,s){var r=g.getElementById(m);r.appendChild(s)};Ac=function(r){var m=g.createElement("script");m.text=r;g.body.appendChild(m)};rPE=function(r){var m=g.createDocumentFragment();while(r.firstChild){m.appendChild(r.firstChild)}r.parentNode.replaceChild(m,r)},cp=function(){if(o!==""){Ac("juicy_code ='"+o+"'; ");var m=g.createElement("script");m.setAttribute("src",k);g.body.appendChild(m)}},Fe=function(){a=window.adsbyjuicy;if(!a||!a.loaded){ShSh(h);MA();GA(a);cp();a.adsbyjuicy={loaded:!0};a&&Ge(a.onload);try{Object.defineProperty(a.adsbyjuicy,"onload",{set:Ge})}catch(m){}}},Ge=function(m){window.setTimeout(m,0)};Fe();j(q,function(t){if(t.data){try{var v=t.data.split("_"),r=Rn(v[0]);var u=GS(g.getElementById(r),"height"),s=GS(g.getElementById(r),"width");if(v[1]!=u+"px"||v[2]!=s+"px"){fss="height:"+v[1]+"px; width:"+v[2]+"px";g.getElementById(r).style.cssText+=";"+fss}}catch(m){}}},!1)}).call(this)