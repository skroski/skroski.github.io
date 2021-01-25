const { Observable } = rxjs;
const { share } = rxjs.operators;
const promise = new Promise((resolve) => {
    //console.log('Iniciando Promise');
    resolve(1);
    //setTimeout(() => resolve(1), 3000)
    // resolve(2); Não funciona
})

const observer = Observable.create((observer) =>{
    //console.log('Iniciando o Observable');
    let i =0;
   
    const interval = setInterval(() => {
        console.log('aqui mais', i);
        observer.next(i++)}, 1000)
    observer.next(1);
    return () => clearInterval(interval);
    //observer.next(2);
})
/* .pipe(
    share()
) */

promise.then(num => console.log('Promise 2', num))
const subscriber = observer.subscribe(num => console.log('Observable 2 ', num));

setTimeout(() => {
    subscriber.unsubscribe();
}, 5000);

// subscriber.unsubscribe();
/* setTimeout(() =>{
    promise.then(num => console.log('Promise 3', num))
    observer.subscribe(num => console.log('Observable 3', num));
},2000) */
// .subscribe(num => console.log('Observable', num));