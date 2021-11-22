import PropTypes from 'prop-types';
function Resultat({titre, description}) {
    return (
        <div>
            <h3>{titre}</h3>
            <p>{description}</p>
        </div>
    )
}
Resultat.propsTpyes ={
    chemin : PropTypes.arrayOf(
        PropTypes.shape({
            numero: PropTypes.number.isRequired,
            titre : PropTypes.string.isRequired,
            description: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
  }
export default Resultat
