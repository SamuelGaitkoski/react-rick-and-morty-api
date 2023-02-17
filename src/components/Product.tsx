import '../styles/product.scss';

import { Character } from "../types/Character";

type Props = {
    item: Character
};

const handleSelectCharacter = () => {
    
}

export const Product = (props: Props) => {
    return (
        <div className="product" onClick={handleSelectCharacter}>
            <img src={props.item.image} alt="" />
            <div className="product-right-part">
                <div className="name">
                    <h2>{props.item.name}</h2>
                </div>
                <div className="status-species">
                    <div 
                        style={{backgroundColor: props.item.status == "Alive" ? "#55CC44" : "#D63D2E"}}
                    >
                    </div>
                    <p>{props.item.status} - {props.item.species}</p>
                </div>
                <div className="last-known-location">
                    <p className="title-infos">Last known location:</p>
                    <p className="infos">{props.item.location.name}</p>
                </div>
                <div className="place-first-seen">
                <p className="title-infos">First seen in:</p>
                    <p className="infos">{props.item.origin.name}</p>
                </div>
            </div>
        </div>
    );
}