import PropTypes from 'prop-types'
import profilePic from './assets/asa.png'

function Card({name = "Name", desc = "Description", image = null}){
    return(
        <div className="card">
            <img className="card-image" src={image} alt="profile picture"></img>
            <h2 className="card-title">{name}</h2>
            <p className ="card-text">{desc}</p>
        </div>
    );
}

Card.propTypes = {
    name: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string
}


export default Card;