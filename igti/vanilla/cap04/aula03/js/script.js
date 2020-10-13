window.addEventListener('load', () => {
 doSpread();
 doRest();
 doDestructuring();
});

function doSpread() {
    const marriedMen = people.results.filter (person => person.name.title === 'Mr');
    const marriedWoman = people.results.filter (person => person.name.title === 'Ms');
    const marriedPeople = [...marriedMen, ...marriedWoman, { msg: 'Oi'}];
    console.log(marriedPeople);
}

function doRest() {
    console.log(infiniteSum(1,2));
    console.log(infiniteSum(1,2, 1000, 1,2,3,4,5,6,100));

}
function infiniteSum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
function doDestructuring() {

    const first = people.results[0];
    //Repetitivo
    //const username = first.login.username;
    // const username = first.login.password;
    const {username, password} = first.login;

    console.log(username);
    console.log(password);
    
}