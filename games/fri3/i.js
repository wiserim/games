let e,t,n=""+new URL("main.wasm",import.meta.url).href,a=new TextDecoder,i=c.getContext("webgl"),o=(e,t)=>(t=i.createShader(t),i.shaderSource(t,e),i.compileShader(t),t),r=(e,t,n,a,o,r)=>{i.enableVertexAttribArray(e),i.vertexAttribPointer(e,t,o,r,n,a)},s=((e,t,n=((e,t)=>{let n=o(e,35633),a=o(t,35632),r=i.createProgram();return i.attachShader(r,n),i.attachShader(r,a),i.linkProgram(r),i.deleteShader(n),i.deleteShader(a),r})(e,t))=>({t:n,i:i.getUniformLocation(n,"m"),o:i.getAttribLocation(n,"x"),l:i.getAttribLocation(n,"y")}))("attribute vec3 x;attribute vec4 y;uniform mat4 m;varying vec4 c;void main(){c=y;gl_Position=m*vec4(x,1.0);}","precision mediump float;varying vec4 c;void main(){gl_FragColor=c;}"),l=[],_=new AudioContext,m=_.createGain();m.connect(_.destination);let u=()=>{"s"==_.state[0]&&_.resume().catch()},p=()=>devicePixelRatio,v=(e,t=b.clientWidth,n=b.clientHeight,a=p())=>{c.width=t*a,c.height=n*a,c.style.width=t+"px",c.style.height=n+"px"};v(),b.onresize=v;let d=x,w=[],{sin:y,cos:f,pow:A,atan2:g}=Math,P=(({_:e,m:t,u:n,p:a,v:i,A:o,P:r,U:c})=>({0:{a:e,b:t,c:n,d:a,e:i,f:o,g:r,h:c}}))({U:(t,n,i,o,r,c,s)=>((e,t,n,a,i,o,r=1/p(),c=w[e])=>{if(!c){if(!o)return;b.append(w[e]=c=d.cloneNode(!0))}c.style.left=t*r+"px",c.style.top=n*r+"px",c.style.font=i+"vmin monospace",c.style.color="#"+a.toString(16).padStart(6,"0"),c.style.zIndex="1"+n,c.children[0].innerText=o})(t,n,i,o,r,((t,n)=>a.decode(new Uint8Array(e.buffer,t,n)))(c,s)),_(t,n,a,o,c){let _=c++,m=c++;l[_]||(l[_]=i.createBuffer(),l[m]=i.createBuffer()),i.bindBuffer(34962,l[_]),i.bindBuffer(34963,l[m]),i.bufferData(34962,new Uint8Array(e.buffer,t,n),35040),i.bufferData(34963,new Uint16Array(e.buffer,a,o),35040),r(s.o,3,16,0,5126,!1),r(s.l,4,16,12,5121,!0),i.drawElements(4,o,5123,0)},m(t,n,a,i,o,r){let c=_.createBuffer(1,n,44100);c.getChannelData(0).set(new Float32Array(e.buffer,t,n));let s=_.createGain();s.gain.value=a,s.connect(m);let l=_.createStereoPanner();l.pan.value=i,l.connect(s);let u=_.createBufferSource();u.detune.value=o,u.buffer=c,u.connect(l),u.start(r,0)},u:e=>e?(i.enable(3042),i.blendFunc(1,771),i.enable(2929),i.depthFunc(515),void i.depthMask(!1)):(i.disable(3042),i.enable(2929),i.depthFunc(513),void i.depthMask(!0)),p:y,v:f,A,P:g});fetch(n).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,P)).then(n=>(n=>{let a={F:(o=n.exports).a,q:o.b,C:o.c,M:o.memory};var o;e=a.M,((e,t)=>{let n={mouse:0,touch:1,pen:2},a=(t,a,i=c.getBoundingClientRect(),o=p())=>{e(t.pointerId,t.isPrimary?1:0,t.buttons,a,n[t.pointerType],(t.clientX-i.x+t.width/2)*o,(t.clientY-i.y+t.height/2)*o)};c.onpointerdown=e=>a(e,0),c.onpointermove=e=>a(e,1),c.onpointerup=e=>{u(),a(e,2)},c.onpointerenter=e=>a(e,3),c.onpointerleave=e=>a(e,4),addEventListener("wheel",e=>{e.preventDefault()},{passive:!1}),onkeydown=(e,n=e.keyCode)=>(u(),!e.repeat&&n&&t(0,n),e.preventDefault(),!1),onkeyup=(e,n=e.keyCode)=>{e.preventDefault(),n&&t(1,n)}})(a.q,a.C);let r=0,l=performance.now(),_=e=>{r+=e>l?e-l:0,l=e;let n=1e3/60;if(r/n|0){let e=i.drawingBufferWidth,o=i.drawingBufferHeight;((e,n)=>{i.viewport(0,0,e,n),i.clear(256),t=((e,t)=>[2/e,0,0,0,0,-2/t,0,0,0,0,-1e-5,0,-1,1,0,1])(e,n),i.useProgram(s.t),i.uniformMatrix4fv(s.i,!1,t)})(e,o),a.F(r/n|0,e,o),r-=(r/n|0)*n}requestAnimationFrame(_)};requestAnimationFrame(_)})(n.instance));
