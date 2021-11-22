import './style.css';

function Header({naissance, setnaissance}) {
    const handleChange = (e) => {
        setnaissance(e.target.value)

} 
    return (
        <header>
            <h1>Chemin de vie</h1>
            <form>
                <label>Entrez votre date de naissance</label>
                <p>Chaque chiffre sera utilisé pour calculer votre chiffre de chemin de vie.</p>
                <input type="date" value={naissance} onChange={handleChange}/>
            </form>
            <p>Votre chiffre de chemin de vie est</p>
        </header>
    )
}

export default Header
