import Resultat from "./Resultat";
import PropTypes from 'prop-types';
import './style.css';


function Body({chemin, naissance}) {
    const nan= parseInt(naissance.replace(/-/g,""));

const single=(i)=>{
  return Math.floor((nan/(10**i)))-Math.floor((nan/(10**(i+1))))*10
}

let sum=0;
    for(let i =0;i<8;i++){
       sum+=single(i);
    }
    const numeroselect =(i)=>{
  return Math.floor((sum/(10**i)))-Math.floor((sum/(10**(i+1))))*10
}
    let resulat =0;
    for(let i =0;i<8;i++){
      resulat+=numeroselect(i);
    }
    const filter = chemin.filter((vie)=>vie.numero===resulat)
    return (
        <div className="resulat">
            <h2>{naissance===""? "?": resulat}</h2>
            {filter.map((vie) => <Resultat key={vie.numero} {...vie} />)}
        </div>
    )
}
Body.propsTpyes ={
  chemin : PropTypes.arrayOf(
      PropTypes.shape({
          numero: PropTypes.number.isRequired,
          titre : PropTypes.string.isRequired,
          description: PropTypes.string.isRequired
      }).isRequired
  ).isRequired
}
export default Body
