import Resultat from "./Resultat";
import PropTypes from 'prop-types';
import './style.css';


function Body({chemin, naissance}) {
    const nan= parseInt(naissance.replace(/-/g,""));

const single=(i)=>{
  return Math.floor((nan/(10**i)))-Math.floor((nan/(10**(i+1))))*10
}
//addtionner tous les chiffres de date de naissance
let sum=0;
    for(let i =0;i<8;i++){
       sum+=single(i);
    }
    
    const numeroselect =(i)=>{
  return Math.floor((sum/(10**i)))-Math.floor((sum/(10**(i+1))))*10
}

//additonner les chiffres de sum
    let preimierResulte =0;
    for(let i =0;i<2;i++){
      preimierResulte+=numeroselect(i);
    }
    let resulat=0;
  if(preimierResulte<=9 || preimierResulte ===11 || preimierResulte===22 ||preimierResulte===33){
resulat=preimierResulte
  }else if (preimierResulte===19){
    resulat =1
  } else {
    const numeroT =(i)=>{
      return Math.floor((preimierResulte/(10**i)))-Math.floor((preimierResulte/(10**(i+1))))*10}
      for(let i =0;i<2;i++){
        
        resulat+=numeroT(i);
      }

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
