// import React from "react";
import { Details } from "./data";
import { imageUrl } from "./Imgur";


export default function list() {
    const listItem = Details.map( (person) => 
    <>
        <li key={person.id}>
            <img src={imageUrl(person)} 
            alt={person.name} 
        />
            <h2>{person.name} <br/> <span className="profession">{person.profession}</span> <br/> <a href={person.fbLink} target="blank"><i>{person.fbIcon}</i></a> </h2>
        </li>
        <hr></hr>
    </>
    );

    return(
        <>
        <h1>Name List React Practice</h1>
        <ul>{listItem}</ul>
        </>
    );
}

