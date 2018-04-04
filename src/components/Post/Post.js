import React from 'react';
// import { withRouter } from 'react-router-dom'
import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

// para que o componente possa 
// acessar as propriedades de rotas
// export default withRouter(post);
export default post;