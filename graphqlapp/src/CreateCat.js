import {gql, useMutation} from '@apollo/client';
import React from "react";


//Вот так и появляются котики с помощью мутаций...
//Но не бойтесь, они такие же милые как и были (=^･ｪ･^=)

const ADD_CAT = gql`
    mutation($name : String!) {
        createCat(name: $name) {
            id
            name
        }
    }
`
export default function AddCat() {
    let input;
    const [addCat] = useMutation(ADD_CAT);
    return (
        <div className='createCats'>
            <form
                onSubmit={ e => {
                    e.preventDefault();
                    addCat({variables: {name: input.value}});
                     input.value = '';


                }}>
                <input className='inputName' placeholder='Дайте имя котику' ref={node => {
                    input = node;
                }}/>
                <button className='addCatButton' type="submit">Add Cat</button>
            </form>
        </div>
    );
}
