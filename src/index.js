
import "./scss/reset.scss";

if (module.hot) {
    module.hot.accept();
}
const a = 2;
const fn = () =>{
    console.log("app" + 2)
}
fn()
document.getElementById('app').innerHTML = "Webpack works";