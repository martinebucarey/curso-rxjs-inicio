import { fromEvent } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ex dui, finibus eget auctor nec, viverra congue lacus. Morbi dictum justo ac aliquet varius. Vestibulum molestie mauris in tellus iaculis, vitae placerat velit ultrices. Maecenas ut purus quis mauris aliquet faucibus at eget quam. Donec vel tempus velit. Maecenas vitae erat pellentesque, venenatis eros at, rhoncus ipsum. Maecenas ex dolor, efficitur in nibh in, auctor consequat lorem. Mauris eu nulla dignissim, sollicitudin ipsum vel, volutpat nisl. Cras volutpat arcu porta arcu ultricies interdum. Vestibulum non neque pellentesque, faucibus nulla vitae, lobortis justo. Proin non augue ultrices massa feugiat ullamcorper nec quis nisi. Aliquam quis neque sed turpis congue luctus et in dui. Praesent vel lacinia mauris, ac porttitor neque.
<br/>
<br/>

Maecenas rhoncus eros dolor, quis varius elit mattis vitae. Aliquam a tortor at mi elementum rhoncus nec eget ipsum. Cras suscipit pretium lacus non finibus. Morbi fringilla, diam vel volutpat iaculis, dui urna tristique lectus, vitae aliquet arcu dolor sit amet ligula. Aliquam eu nibh et tortor elementum porta ac ut nisl. Vestibulum ut ullamcorper nibh. Vivamus nisl justo, feugiat sit amet lacus vel, fringilla luctus purus. Fusce arcu odio, gravida non mollis commodo, vulputate ut lacus.
<br/>
<br/>

Vivamus ligula libero, cursus quis rhoncus eu, ornare eget metus. Morbi porttitor justo id nulla iaculis faucibus. Aenean urna leo, bibendum eu ligula ut, maximus facilisis velit. Nunc pellentesque tortor vitae ultrices luctus. Aenean eros ipsum, congue ac lectus id, eleifend tincidunt turpis. Donec posuere urna a orci efficitur hendrerit non ac metus. Mauris vel mi quis nisl scelerisque tempus vel quis justo. Nunc porttitor leo vitae bibendum viverra. Nulla sed lectus felis. Nam in tortor sit amet odio scelerisque commodo nec vel lorem. Donec vehicula nisl sed pulvinar placerat. Fusce at purus magna. Proin arcu mauris, gravida et ultrices in, consequat dictum dui. Cras tortor lectus, sagittis quis ante quis, aliquet lobortis quam. Maecenas posuere a est non sodales.
<br/>
<br/>

Curabitur at venenatis enim. Praesent enim dolor, dapibus eu nunc a, scelerisque gravida turpis. Duis a nulla erat. Maecenas porta hendrerit elit in rhoncus. Aenean feugiat leo nisi, at auctor mi aliquet at. Nulla cursus nunc quis augue porta, non venenatis nibh feugiat. Donec tempor eros a pellentesque malesuada. Donec dapibus odio ac turpis egestas, vitae elementum dui venenatis.
<br/>
<br/>

Nulla vehicula enim in nulla pharetra posuere. Proin quis neque ut eros finibus tempor nec ut tortor. Duis commodo nec enim in varius. Proin sollicitudin, quam in ultricies commodo, nulla dui pulvinar magna, a suscipit nulla ex ut ex. Donec eu consectetur nisl, vel tempor leo. Cras in justo tempor, posuere eros sit amet, tincidunt nisl. Maecenas gravida lacinia dolor id consequat. Sed et orci urna. Aenean a magna ac magna tincidunt aliquam. Phasellus at pulvinar mauris. Praesent vehicula sodales urna sed viverra. Aenean tempus sodales hendrerit. `;


const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo

// Streams

const scroll$ = fromEvent(document, 'scroll');

// scroll$.subscribe(console.log);

const progress$ = scroll$.pipe();

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`
})