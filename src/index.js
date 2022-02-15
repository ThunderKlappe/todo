import './style.css'
import Project from './Project.js'

const fixAnim = (()=>{
    setTimeout(()=> document.querySelectorAll(".make-hoverable").forEach(ele => {
        ele.classList.add('hoverable');
        ele.classList.remove('make-hoverable')}, 1));
})();