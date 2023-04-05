import { fromEvent, map } from "rxjs";

const texto = document.createElement('div');

texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac venenatis dui. Vivamus risus diam, ultrices et dui vel, consectetur lobortis nisi. Duis suscipit sollicitudin nibh, sit amet consequat neque varius sed. Vivamus purus felis, consequat in fermentum in, ullamcorper id odio. Sed hendrerit at arcu eget gravida. Maecenas vulputate diam at ligula laoreet, vel venenatis sapien egestas. Vivamus sed fermentum nisi. Nullam hendrerit ante id eros semper, nec semper leo viverra. In porta nisi sed libero malesuada, sed pellentesque leo faucibus. Etiam vehicula tempus sem sit amet consectetur. Nunc dignissim ipsum condimentum arcu feugiat porttitor.
<br><br>
Suspendisse ornare urna dapibus libero mollis rhoncus. Sed massa lorem, faucibus rutrum tellus id, euismod accumsan quam. Nulla felis ipsum, gravida et blandit id, tincidunt sit amet eros. Vestibulum non libero sed nulla malesuada interdum nec sed libero. Cras ornare nisl vel velit efficitur cursus. Curabitur quis ligula a sem sagittis finibus blandit ut urna. Vestibulum pretium felis vitae arcu accumsan, in porta tortor dapibus. Curabitur at tincidunt velit, eu mattis magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eget lectus mattis, porta urna sit amet, tempus ipsum. Pellentesque eu porttitor libero, vitae faucibus lorem. Cras dignissim blandit varius.
<br><br>
Quisque lacus est, tincidunt id odio eget, pretium rutrum quam. Morbi consequat efficitur semper. Ut hendrerit odio id dolor varius, vehicula tempus urna feugiat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris varius, erat ac tincidunt eleifend, risus erat pellentesque augue, nec vulputate sem odio id enim. Donec eleifend metus nisl, eu consequat arcu tincidunt id. Cras laoreet congue purus ac fringilla. Pellentesque elementum metus quis nisl elementum, in tincidunt risus suscipit. Fusce placerat ultrices sapien, nec lacinia ligula luctus quis. Proin et porta libero. Aenean in turpis urna. In quis mattis libero. Quisque lacinia hendrerit ligula non posuere. Maecenas tincidunt est nisl, vitae faucibus elit fringilla et. Sed placerat tempor tellus, nec lobortis libero rhoncus ut. Etiam malesuada erat iaculis dolor mattis congue.
<br><br>
Suspendisse sollicitudin dapibus auctor. Proin interdum elit non magna bibendum, eget ullamcorper odio aliquet. Quisque volutpat ante aliquam turpis sollicitudin ultricies. Nam mattis nibh euismod, vehicula tortor eget, venenatis ex. Curabitur vitae cursus sapien. Nunc vulputate pharetra enim quis laoreet. Quisque sit amet egestas nisi. Ut ex dolor, ultrices sit amet lorem at, pulvinar molestie neque. Vivamus accumsan egestas dui. Aenean auctor luctus venenatis. Aliquam sed commodo est, vel pretium arcu. Vivamus ipsum magna, ultricies ac metus vel, molestie tincidunt elit. Proin congue consectetur fringilla. Ut et maximus sapien. Nunc urna est, sollicitudin a ex et, lobortis scelerisque justo. Nullam varius magna et venenatis ullamcorper.
<br><br>
Donec in dolor tempor, rhoncus neque in, sagittis lacus. Phasellus lectus ante, rutrum nec sapien ullamcorper, fringilla tempor ligula. Fusce et aliquet ex, vel auctor turpis. Fusce sollicitudin, tellus et pretium elementum, augue arcu fermentum lorem, ut vestibulum leo erat et dui. Vestibulum in luctus enim. Donec fermentum quis ante et consequat. Morbi hendrerit orci turpis, dapibus bibendum ante vulputate tempus. Donec sollicitudin, lectus vitae ullamcorper aliquam, purus massa dapibus lacus, et semper arcu est a massa.
`


const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div');
progressBar.setAttribute('class','progress-bar');
body.append(progressBar)

// funcion que haga el calculo
const calcularPorcentaheScroll = (event:any)=> {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return ( scrollTop / ( scrollHeight - clientHeight) * 100 )
}


const scroll$ = fromEvent(document, 'scroll');

const progress$$ = scroll$.pipe(
    map(calcularPorcentaheScroll)
)

progress$$.subscribe( porcentaje => {
 progressBar.style.width = `${porcentaje}%`
})