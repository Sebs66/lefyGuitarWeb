// Escalas
const escalasMenor_cromatica = {
    c:["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C"],
    d:["D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D"],
    e:["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E"],
    f:["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F"],
    g:["G","Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G"],
    a:["A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A"],
    b:["B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],

    csharp:["C#","D","D#","E","F","F#","G","G#","A","A#","B","C","C#"],
    dsharp:["D#","E","E#","F#","G","G#","A","A#","B","C","C#","D","D#"],
    fsharp:["F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#"],
    gsharp:["G#","A","A#","B","C","C#","D","D#","E","F","F#","G","G#"],
    asharp:["A#","B","B#","C#","C##","D#","E","E#","F#","G","G#","A","A#"],

    db:["Db","E","Eb","E","F","Gb","G","Ab","Bbb","Bb","B","C","Db"], // doble bb, se usa C# en su lugar.
    eb:["Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","Eb","E"],
    gb:["Gb","G","Ab","Bbb","Bb","Cb","C","Db","Ebb","Eb","E","F","Gb"], // doble bb, se usa F# en su lugar.
    ab:["Ab","A","Bb","Cb","C","Db","D","Eb","Fb","F","Gb","G","Ab"],
    bb:["Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb"],

};
const escalasMayor_cromatica = {
    c:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B","C"],
    d:["D","D#","E","F","F#","G","G#","A","A#","B","C","C#","D"],
    e:["E","F","F#","G","G#","A","A#","B","C","C#","D","D#","E"],
    f:["F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb","E","F"],
    g:["G","G#","A","A#","B","C","C#","D","D#","E","F","F#","G"],
    a:["A","A#","B","C","C#","D","D#","E","F","F#","G","G#","A"],
    b:["B","C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],

    csharp:["C#","D","D#","E","E#","F#","G","G#","A","A#","B","B#","C#"],
    dsharp:["D#","E","E#","F##","G","G#","A","A#","B","C","C#","C##","D#"], // doble ##, se usa Eb en su lugar.
    fsharp:["F#","G","G#","A","A#","B","C","C#","D","D#","E","F","F#"],
    gsharp:["G#","A","A#","B","C","C#","D","D#","E","F","F#","F##","G#"], // doble ##, se usa Ab en su lugar.
    asharp:["A#","B","B#","C#","C##","D#","E","E#","F#","F##","G#","G##","A#"], //doble ##, se usa Bb en su lugar.

    cb:["Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db"],
    db:["D#","E","E#","F#","G","G#","A","A#","B","C","C#","D","D#"],
    eb:["Eb","E","F","Gb","G","Ab","A","Bb","B","C","Db","D","Eb"],
    gb:["Gb","G","Ab","A","Bb","Cb","C","Db","D","Eb","E","F","Gb"],
    ab:["Ab","A","Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab"],
    bb:["Bb","B","C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb"]
};

//Funcion para seleccion de escala y modificación de tabla. Es el corazón de la página.
function dropDownScale(escala){ // Value es la escala
    console.log('dropdownScale Function');
    nota = document.querySelector('select#rootNote').value;
    updatePosTonosNotas(escala); // actualiza la posición de los tonos y las notas en la tabla según la escala.
    updateNotas(nota); // reemplaza las notas en la tabla según el valor de ese dropdown Menu.

}
function updatePosTonosNotas(value){
    // función actualiza la posicion de los tonos en la tabla y hace aparecer las posiciones correspondientes
    // creacion de variables para selección de los diferentes tonos.
    var t1 = document.querySelector("body .principal .tabla .tono1");
    var t2 = document.querySelector("body .principal .tabla .tono2");
    var t3 = document.querySelector("body .principal .tabla .tono3");
    var t4 = document.querySelector("body .principal .tabla .tono4");
    var t5 = document.querySelector("body .principal .tabla .tono5");
    var st1 = document.querySelector("body .principal .tabla .semiTono1");
    var st2 = document.querySelector("body .principal .tabla .semiTono2");
    var intervalosMayor = ['6M','7m','7M','R','2m','2M','3m','3M','4','Tri','5','6m'];
    var intervalosMenor = ['6M','7m','7M','r','2m','2M','3m','3M','4','Tri','5','6m'];

    //Eliminamos las clases previas de posición del tono y nota, para volver a partir.
    t2.classList.remove("tono2Mayor","tono2Menor");
    t4.classList.remove("tono4Mayor","tono4Menor");
    t5.classList.remove("tono5Mayor","tono5Menor");
    st1.classList.remove("semiTono1Mayor","semiTono1Menor");
    st2.classList.remove("semiTono2Mayor","semiTono2Menor");
    for (let i = 0; i< $('.boton').length;i++){
        $('.boton')[i].classList.remove('seleccionado')
    }
    switch(value){
        case "major":
            t2.classList.add("tono2Mayor");
            t4.classList.add("tono4Mayor");
            t5.classList.add("tono5Mayor");
            st1.classList.add("semiTono1Mayor");
            st2.classList.add("semiTono2Mayor");
            $('.boton.st0')[0].classList.add('seleccionado')
            $('.boton.st2')[0].classList.add('seleccionado')
            $('.boton.st4')[0].classList.add('seleccionado')
            $('.boton.st5')[0].classList.add('seleccionado')
            $('.boton.st7')[0].classList.add('seleccionado')
            $('.boton.st9')[0].classList.add('seleccionado')
            $('.boton.st11')[0].classList.add('seleccionado')
            $('.boton.st12')[0].classList.add('seleccionado')
            for (key in intervalosMenor){
                intervalo = $('.tabla__intervalos.escalaRelativa button')[key];
                intervalo.innerHTML = intervalosMenor[key]
            }
            break;
        case "pentatonicMajor":
            t2.classList.add("tono2Mayor");
            //t4.classList.add("tono4Mayor");
            t5.classList.add("tono5Mayor");
            st1.classList.add("semiTono1Mayor");
            st2.classList.add("semiTono2Mayor");
            $('.boton.st0')[0].classList.add('seleccionado')
            $('.boton.st2')[0].classList.add('seleccionado')
            $('.boton.st4')[0].classList.add('seleccionado')
            $('.boton.st7')[0].classList.add('seleccionado')
            $('.boton.st9')[0].classList.add('seleccionado')
            $('.boton.st12')[0].classList.add('seleccionado')
            for (key in intervalosMenor){
                intervalo = $('.tabla__intervalos.escalaRelativa button')[key];
                intervalo.innerHTML = intervalosMenor[key]
            }
            break;
        case "naturalMinor":
            console.log("naturalMinor");
            t2.classList.add("tono2Menor");
            t4.classList.add("tono4Menor");
            t5.classList.add("tono5Menor");
            st1.classList.add("semiTono1Menor");
            st2.classList.add("semiTono2Menor");
            $('.boton.st0')[0].classList.add('seleccionado')
            $('.boton.st2')[0].classList.add('seleccionado')
            $('.boton.st3')[0].classList.add('seleccionado')
            $('.boton.st5')[0].classList.add('seleccionado')
            $('.boton.st7')[0].classList.add('seleccionado')
            $('.boton.st8')[0].classList.add('seleccionado')
            $('.boton.st10')[0].classList.add('seleccionado')
            $('.boton.st12')[0].classList.add('seleccionado')
            for (key in intervalosMayor){
                intervalo = $('.tabla__intervalos.escalaRelativa button')[key];
                intervalo.innerHTML = intervalosMayor[key]
            }
            break;
        case "pentatonicMinor":
            console.log("naturalMinor");
            t2.classList.add("tono2Menor");
            t4.classList.add("tono4Menor");
            t5.classList.add("tono5Menor");
            st1.classList.add("semiTono1Menor");
            st2.classList.add("semiTono2Menor");
            $('.boton.st0')[0].classList.add('seleccionado')
            $('.boton.st3')[0].classList.add('seleccionado')
            $('.boton.st5')[0].classList.add('seleccionado')
            $('.boton.st7')[0].classList.add('seleccionado')
            $('.boton.st10')[0].classList.add('seleccionado')
            $('.boton.st12')[0].classList.add('seleccionado')
            break;
        default:
            console.log("Select Scale");
            break;
    }
}
function updateNotas(nota){
    // arreglamos nota para que coincida con nuestro objeto notas.
    valor_nota = nota.toLowerCase();
    valor_nota = valor_nota.replace('#','sharp'); 

    const valor_escala = document.querySelector('select#escala').value;
    const intervalos = $(".tabla__intervalos .intervalos");
    const colores = $(".tabla__ColoresIntervalos .color");
    const notas = $(".tabla__notas .boton"); // Matriz con los elementos botones de las notas.
    const intervalos_relativos = $(".escalaRelativa .tabla__intervalos .intervalos");

    notas.removeClass('seleccionado'); //Borramos las notas seleccionadas.
    intervalos.removeClass('seleccionado');
    colores.removeClass('seleccionado');
    intervalos_relativos.removeClass('seleccionado');
        // borramos todos los colores seleccionados.
    $('.key__text')[0].innerHTML = ""; // Borramos texto HTML con warning.
    //console.log(notas);

    const major = [0,2,4,5,7,9,11,12];
    const pent_major = [0,2,4,7,9,12];
    const minor = [0,2,3,5,7,8,10,12];
    const pent_minor = [0,3,5,7,10,12];
    // preguntamos la escala para obtener la escala correspondiente en nuestro objeto.
    switch(valor_escala){
        case"major":
            switch(nota){
                case 'D#':
                    $('.key__text')[0].innerHTML = "Esta escala tiene un doble ##,  mejor usa Eb, es equivalente!";
                    break;
                case 'G#':
                    $('.key__text')[0].innerHTML = "Esta escala tiene un doble ##,  mejor usa Ab, es equivalente!";
                    break;
                case 'A#':
                    $('.key__text')[0].innerHTML = "Esta escala tiene un doble ##,  mejor usa Bb, es equivalente!";
                    break;
            }
            notas_escala_cromatica = escalasMayor_cromatica[valor_nota];
            for (let index = 0;index<notas.length;index++){
                notas[index].innerHTML = notas_escala_cromatica[index];
            }
            for (let index=0;index<major.length;index++){
                notas[major[index]].classList.add('seleccionado');
                intervalos[major[index]].classList.add('seleccionado');
                intervalos_relativos[major[index]].classList.add('seleccionado');
                colores[major[index]].classList.add('seleccionado')
            }
            break;
        case"pentatonicMajor":
            switch(nota){
                case 'D#':
                    $('.key__text')[0].innerHTML = "Esta escala tiene un doble ##,  mejor usa Eb, es equivalente!";
                    break;
                case 'G#':
                    $('.key__text')[0].innerHTML = "Esta escala tiene un doble ##,  mejor usa Ab, es equivalente!";
                    break;
                case 'A#':
                    $('.key__text')[0].innerHTML = "Esta escala tiene un doble ##,  mejor usa Bb, es equivalente!";
                    break;
            }
            notas_escala_cromatica = escalasMayor_cromatica[valor_nota];
            for (index = 0;index<notas.length;index++){
                notas[index].innerHTML = notas_escala_cromatica[index];
            }
            for (let index=0;index<pent_major.length;index++){
                notas[pent_major[index]].classList.add('seleccionado');
                intervalos[pent_major[index]].classList.add('seleccionado');
                intervalos_relativos[pent_major[index]].classList.add('seleccionado');
                colores[pent_major[index]].classList.add('seleccionado');
            }
            break;
        case"naturalMinor":
            switch(nota){ // excepciones segun la escala.
                case 'Db':
                    $('.key__text')[0].innerHTML = "Esta escala tiene doble bb,  mejor usa C#, es equivalente!";
                    break;
                case  'Gb':

                    $('.key__text')[0].innerHTML = "Esta escala tiene doble bb,  mejor usa F#, es equivalente!";
                    break;
            }
            notas_escala_cromatica = escalasMenor_cromatica[valor_nota];
            for (index = 0;index<notas.length;index++){
                notas[index].innerHTML = notas_escala_cromatica[index];
            }
            for (let index=0;index<minor.length;index++){
                notas[minor[index]].classList.add('seleccionado');
                intervalos[minor[index]].classList.add('seleccionado');
                intervalos_relativos[minor[index]].classList.add('seleccionado');
                colores[minor[index]].classList.add('seleccionado');
            }
            break;
        case"pentatonicMinor":
            switch(nota){ // excepciones segun la escala.
                case 'Db':
                    $('.key__text')[0].innerHTML = "Esta escala tiene doble bb,  mejor usa C#, es equivalente!";
                    break;
                case  'Gb':

                    $('.key__text')[0].innerHTML = "Esta escala tiene doble bb,  mejor usa F#, es equivalente!";
                    break;
            }
            notas_escala_cromatica = escalasMenor_cromatica[valor_nota];
            for (let index = 0;index<notas.length;index++){
                notas[index].innerHTML = notas_escala_cromatica[index];
            }
            for (let index=0;index<pent_minor.length;index++){
                notas[pent_minor[index]].classList.add('seleccionado');
                intervalos[pent_minor[index]].classList.add('seleccionado');
                intervalos_relativos[pent_minor[index]].classList.add('seleccionado');
                colores[pent_minor[index]].classList.add('seleccionado');
            }
            break;  
    }
    ocultarIntervalosCuello();
    updateIntervalosCuello();
    updateNotasCuello();
    if ($('.key__text')[0].innerHTML != ""){
        console.log('Ocultamos Notas/intervalos por escala incompatible');
        ocultarNotasCuello();
        ocultarIntervalosCuello();
    }
}
function updateIntervalosCuello(){
    // Cambia innerHTML de guitarra 2 según los intervalos y agrega clase seleccionado al intervalo del cuello2.
    var notas = $(".tabla__notas .boton");
    //Primero borramos intervalos.
    var todas_notas = document.querySelectorAll('.guitarra2 .cuello .nota');
    todas_notas.forEach(el => el.innerHTML = "");

    var intervalos = ['R','2m','2M','3m','3M','4','Tri','5','6m','6M','7m','7M','R'];
    
    for(let i=0;i<13;i++){
        //console.log($('.guitarra2 .cuello .nota.n'+notas[i].innerHTML.replace('#','sharpIntervalo')))
        var array_notas = document.querySelectorAll('.guitarra2 .cuello .nota.n'+notas[i].innerHTML.replace('##','sharpsharp').replace('#','sharp'));
        //console.log(array_notas)
        array_notas.forEach(el => el.innerHTML = intervalos[i]);
        
    }
    // Mostrar los intervalos.
    var intervalos2 = ['.int_1','.int_2m','.int_2M','.int_3m','.int_3M','.int_4','.int_Tri','.int_5','.int_6m','.int_6M','.int_7m','.int_7M','.int_8'];
    var major = [0,2,4,5,7,9,11]; // no usamos la ultima nota por que la funcion agregarIntervaloCuello usa toggle, por lo que lo estaríamos ocultando la segunda vez.
    var pent_major = [0,2,4,7,9];
    var minor = [0,2,3,5,7,8,10];
    var pent_minor = [0,3,5,7,10];

    var valor_escala = document.querySelector('select#escala').value;
    var intervalo ='';

    switch(valor_escala){
        case'major':
            for (let key in major){
                intervalo = major[key];
                agregarIntervaloCuello(intervalos2[intervalo]);
            }
            break;
        case'naturalMinor':
            for (let key in minor){
                intervalo = minor[key];
                agregarIntervaloCuello(intervalos2[intervalo]);
            }
            break;
        case'pentatonicMajor':
            for (let key in pent_major){
                intervalo = pent_major[key];
                agregarIntervaloCuello(intervalos2[intervalo]);
            }
            break;
        case'pentatonicMinor':
            for (let key in pent_minor){
                intervalo = pent_minor[key];
                agregarIntervaloCuello(intervalos2[intervalo]);
            }
    }    
}
function updateNotasCuello(){
    ocultarNotasCuello()
    $('.guitarra .notasCuerdas .open').removeClass('openNota');
    var valor_nota = (document.querySelector('select#rootNote').value);
    valor_nota = valor_nota.toLowerCase();
    valor_nota = valor_nota.replace('#','sharp');
    var valor_escala = document.querySelector('select#escala').value;

    var major = [0,2,4,5,7,9,11,12];
    var pent_major = [0,2,4,7,9,12];
    var minor = [0,2,3,5,7,8,10,12];
    var pent_minor = [0,3,5,7,10,12];
    
    if ((valor_nota === 'gsharp' && valor_escala ==='major' )|| valor_nota ==='dsharp'&& valor_escala ==='major'|| valor_nota ==='asharp'&& valor_escala ==='major' || valor_nota ==='db'&& valor_escala ==='naturalMinor' || valor_nota ==='gb'&& valor_escala ==='naturalMinor' ){
        console.log('excepción')
    } else{
        switch(valor_escala){
            case"major":
                for (let i=0;i<major.length;i++){
                    notas = escalasMayor_cromatica[valor_nota];
                    clase_nota = '.n'+notas[major[i]]; // nota
                    clase_nota = clase_nota.replace('#','sharp');
                    $('.guitarra .nota'+clase_nota).addClass('seleccionado');
                    $('.guitarra .notasCuerdas .open'+clase_nota).addClass('openNota');
                }
                break;
            case"naturalMinor":
                for (let i=0;i<minor.length;i++){
                    notas = escalasMenor_cromatica[valor_nota];
                    clase_nota = '.n'+notas[minor[i]]; // nota
                    clase_nota = clase_nota.replace('#','sharp');
                    $('.guitarra .nota'+clase_nota).addClass('seleccionado')
                    $('.guitarra .notasCuerdas .open'+clase_nota).addClass('openNota');
                }
                break;    
            case"pentatonicMajor":
                for (let i=0;i<pent_major.length;i++){
                    notas = escalasMayor_cromatica[valor_nota];
                    clase_nota = '.n'+notas[pent_major[i]]; // nota
                    clase_nota = clase_nota.replace('#','sharp');
                    $('.guitarra .nota'+clase_nota).addClass('seleccionado')
                    $('.guitarra .notasCuerdas .open'+clase_nota).addClass('openNota');
                }
                break;  
            case"pentatonicMinor":
                for (let i=0;i<pent_minor.length;i++){
                    notas = escalasMenor_cromatica[valor_nota];
                    clase_nota = '.n'+notas[pent_minor[i]]; // nota
                    clase_nota = clase_nota.replace('#','sharp');
                    $('.guitarra .nota'+clase_nota).addClass('seleccionado')
                    $('.guitarra .notasCuerdas .open'+clase_nota).addClass('openNota');
                }
                break;
        }
    }

}
function ocultarNotasCuello(){
    document.querySelectorAll('.guitarra .cuello .nota').forEach(el => el.classList.remove('seleccionado'))
}
function ocultarIntervalosCuello(){
    document.querySelectorAll('.guitarra2 .cuello .nota').forEach(el => el.classList.remove('seleccionado'))
}
// Funciones para definir color de los intervalos.
{
function defColorInt1(value){
    $('.tabla .tabla__ColoresIntervalos #colorInt1')[0].classList.remove('color1','color2','color3','color4');
    $('.tabla .tabla__intervalos .int_1')[0].classList.remove('color1','color2','color3','color4');
    $('.tabla .tabla__intervalos .int_8')[0].classList.remove('color1','color2','color3','color4');
    $('.tabla .tabla__ColoresIntervalos #colorInt1')[0].classList.add(value);
    $('.tabla .tabla__intervalos .int_1')[0].classList.add(value);
    $('.tabla .tabla__intervalos .int_8')[0].classList.add(value);
    var array = document.querySelectorAll('.guitarra2 .nota');
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="R"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt2m(value){
    $('.tabla .tabla__ColoresIntervalos #colorInt2m')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_2m')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__ColoresIntervalos #colorInt2m')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_2m')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="2m"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt2M(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt2M')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_2M')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt2M')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_2M')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="2M"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt3m(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt3m')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_3m')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt3m')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_3m')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="3m"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt3M(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt3M')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_3M')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt3M')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_3M')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="3M"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt4(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt4')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_4')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt4')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_4')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="4"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorIntTri(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorIntTri')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_Tri')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__ColoresIntervalos #colorIntTri')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_Tri')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="Tri"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt5(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt5')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_5')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt5')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_5')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="5"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt6m(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt6m')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_6m')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt6m')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_6m')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="6m"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt6M(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt6M')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_6M')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt6M')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_6M')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="6M"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt7m(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt7m')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_7m')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt7m')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_7m')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="7m"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
function defColorInt7M(value){
    console.log(value)
    $('.tabla .tabla__ColoresIntervalos #colorInt7M')[0].classList.remove('color1','color2','color3','color4')
    $('.tabla .tabla__intervalos .int_7M')[0].classList.remove('color1','color2','color3','color4')

    $('.tabla .tabla__ColoresIntervalos #colorInt7M')[0].classList.add(value)
    $('.tabla .tabla__intervalos .int_7M')[0].classList.add(value)
    var array = document.querySelectorAll('.guitarra2 .nota')
    for (index = 0;index<array.length;index++){
        if (array[index].innerHTML ==="7M"){
            array[index].classList.remove('color1','color2','color3','color4');
            array[index].classList.add(value);
        }
    }
}
}

function resetColors(){
    //console.log('clicked');
    for (let i=0;i<$('.tabla .tabla__ColoresIntervalos select').length;i++){
        $('.tabla .tabla__ColoresIntervalos select')[i].classList.remove('color1','color2','color3','color4');
        $('.tabla .tabla__ColoresIntervalos select')[i].classList.add('color1');
        $('.tabla .tabla__intervalos .intervalos')[i].classList.remove('color1','color2','color3','color4')
        $('.tabla .tabla__intervalos .intervalos')[i].classList.remove('color1')
    }
    for (let i=0;i<$('.guitarra2 .nota').length;i++){
        //console.log($('.guitarra2 .nota')[i]);
        $('.guitarra2 .nota')[i].classList.remove('color1','color2','color3','color4');
        $('.guitarra2 .nota')[i].classList.remove('color1');
    }
}
function resetNotes(){
    nota = document.querySelector('select#rootNote').value;
    updateNotas(nota); // reemplaza las notas según el valor de ese dropdown Menu.
    ocultarIntervalosCuello();
    updateIntervalosCuello();
}
function toggleIntervalo(value){ // toggle intervalos de la tabla value de forma .int_XX
    //console.log($('.tabla__intervalos button'+value)[0])
    //console.log($('.tabla__ColoresIntervalos select'+value)[0])
    //console.log($('.tabla__notas button'+value)[0])
    $('.tabla__intervalos button'+value)[0].classList.toggle('seleccionado');
    $('.tabla__ColoresIntervalos select'+value)[0].classList.toggle('seleccionado');
    $('.tabla__notas button'+value)[0].classList.toggle('seleccionado');
    $(".escalaRelativa .tabla__intervalos .intervalos"+value)[0].classList.toggle('seleccionado');
    agregarNotaCuello(value);
    agregarIntervaloCuello(value);
    if (value === ".int_1"){
        $('.tabla__intervalos button')[12].classList.toggle('seleccionado');
        $('.tabla__ColoresIntervalos select')[12].classList.toggle('seleccionado');
        $('.tabla__notas button')[12].classList.toggle('seleccionado');
        $(".escalaRelativa .tabla__intervalos .intervalos")[12].classList.toggle('seleccionado');
    }
}
function agregarNotaCuello(value){
    var nota = $('.tabla__notas button'+value)[0].innerHTML
    nota = nota.replace('#','sharp')
    var notas = $('.guitarra .cuello .n'+nota);
    var notasOpen = $('.guitarra .notasCuerdas .n'+nota);
    for (let i = 0;i<notas.length;i++){
        notas[i].classList.toggle('seleccionado')
    }
}
function agregarIntervaloCuello(value){
    // value es el intervalo que cliqueamos con el mouse. del tipo '.int_1' es el value del boton.
    //console.log('.tabla__intervalos button'+value);
    var intervalo = $('.tabla__intervalos button'+value)[0].innerHTML // rescatamos el valor de la nota real
    //console.log(intervalo)
    intervalos = $(".guitarra2 .cuello p.nota") // todas las notas
    for (let i = 0;i<intervalos.length;i++){ // loop por todas las notas
        if (intervalos[i].innerHTML === intervalo){ // si el intervalo tiene el mismo valor del intervalo, lo toggleamos
            intervalos[i].classList.toggle('seleccionado')
        }
    }
}
function darkMode(){
    //console.log($('.sideRight button#botonDarkMode'));
    const boton = $('.sideRight button#botonDarkMode')[0];
    if (boton.innerHTML === 'DarkMode'){
        boton.innerHTML = 'LightMode';
    } else{
        boton.innerHTML = 'DarkMode';
    }
    $('body')[0].classList.toggle('bodyDarkMode');
    $('h1')[0].classList.toggle('textColor');
    $('h2')[0].classList.toggle('textColor');
}
function direccionGuitarraLeft(value){
    //console.log(value)
    if (value ==='left'){
        $('#leftGuitarra')[0].classList.add('botonSeleccionado')
        $('#rightGuitarra')[0].classList.remove('botonSeleccionado')
    } else{
        $('#leftGuitarra')[0].classList.remove('botonSeleccionado')
        $('#rightGuitarra')[0].classList.add('botonSeleccionado')
    }
    $('.guitarra')[0].classList.remove('guitarraDerecha');
    $('.guitarra .notasCuerdas')[0].classList.remove('notasCuerdasDerecha');
    $('.guitarra .numerosTrastes')[0].classList.remove('numerosTrasteDerecha');
    $('.guitarra .cuello')[0].classList.remove('cuelloDerecha');
    $('.guitarra .cuerdasCuello')[0].classList.remove('cuerdasCuelloDerecha');
    $('.guitarra2')[0].classList.remove('guitarraDerecha');
    $('.guitarra2 .notasCuerdas')[0].classList.remove('notasCuerdasDerecha');
    $('.guitarra2 .numerosTrastes')[0].classList.remove('numerosTrasteDerecha');
    $('.guitarra2 .cuello')[0].classList.remove('cuelloDerecha');
    $('.guitarra2 .cuerdasCuello')[0].classList.remove('cuerdasCuelloDerecha');
    // cambiar puntos de notacion de numero de traste.
    const leftPuntos = $('.guitarra .numerosTrastes .left');
    const leftPuntos2 = $('.guitarra2 .numerosTrastes .left');
    const rightPuntos = $('.guitarra .numerosTrastes .right');
    const rightPuntos2 = $('.guitarra2 .numerosTrastes .right');
    for (i=0;i<leftPuntos.length; i ++){
        leftPuntos[i].classList.remove('hide');
        leftPuntos2[i].classList.remove('hide');
    }
    for (i=0;i<rightPuntos.length; i ++){
        rightPuntos[i].classList.add('hide');
        rightPuntos2[i].classList.add('hide');
    }
}
function direccionGuitarraRight(value){
    //console.log(value)
    if (value ==='left'){
        $('#leftGuitarra')[0].classList.add('botonSeleccionado')
        $('#rightGuitarra')[0].classList.remove('botonSeleccionado')
    } else{
        $('#leftGuitarra')[0].classList.remove('botonSeleccionado')
        $('#rightGuitarra')[0].classList.add('botonSeleccionado')
    }
    $('.guitarra')[0].classList.add('guitarraDerecha');
    $('.guitarra .notasCuerdas')[0].classList.add('notasCuerdasDerecha');
    $('.guitarra .numerosTrastes')[0].classList.add('numerosTrasteDerecha');
    $('.guitarra .cuello')[0].classList.add('cuelloDerecha');
    $('.guitarra .cuerdasCuello')[0].classList.add('cuerdasCuelloDerecha');
    $('.guitarra2')[0].classList.add('guitarraDerecha');
    $('.guitarra2 .notasCuerdas')[0].classList.add('notasCuerdasDerecha');
    $('.guitarra2 .numerosTrastes')[0].classList.add('numerosTrasteDerecha');
    $('.guitarra2 .cuello')[0].classList.add('cuelloDerecha');
    $('.guitarra2 .cuerdasCuello')[0].classList.add('cuerdasCuelloDerecha');
    // cambiar puntos de notacion de numero de traste.
    const leftPuntos = $('.guitarra .numerosTrastes .left');
    const leftPuntos2 = $('.guitarra2 .numerosTrastes .left');
    const rightPuntos = $('.guitarra .numerosTrastes .right');
    const rightPuntos2 = $('.guitarra2 .numerosTrastes .right');
    for (i=0;i<leftPuntos.length; i ++){
        leftPuntos[i].classList.add('hide');
        leftPuntos2[i].classList.add('hide');
    }
    for (i=0;i<rightPuntos.length; i ++){
        rightPuntos[i].classList.add('hide');
        rightPuntos2[i].classList.add('hide');
    }
}
updateNotasCuello();
updateIntervalosCuello();