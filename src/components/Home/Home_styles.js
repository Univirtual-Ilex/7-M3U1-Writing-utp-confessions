import {css} from 'styled-components'
import Ilex from '../../App/variables'
import animations from './Home_animations'
// La utilidad css me permite usar css desde un elemento externo
const estilos_home = css`
    h1 {
        color: ${Ilex.morado};
        font-size: 2.5em;
        font-weight: bold;
        line-height:0.95;
    }

    .bloque-izquierdo,.bloque-derecho{
        flex-grow:1;
        width:50%;
        position: relative
    }

    .bloque-izquierdo {
        padding:5em 3em 3em 5em;
        box-sizing:border-box;
        margin-top: 3em;
        .bloque-izquierdo-container{
        width:27.5em;
        margin: auto;
         }
         p{
             margin: 2em 0;
             width: 80%;
             color: ${Ilex.textos};

         }
         .negrilla{
        font-weight: bold;
        }
    }

    .bloque-derecho>figure{
        position:absolute;
        top: 2em;
        left: 7em;
        img{
            display:block;
            width:22.5em;
            height: auto;
        }

    }

    .entrada-top-Y{
        animation-name: ${animations.entrada_top_Y}
    }
    .saldida-top-X{
        animation-name: ${animations.entrada_top_Y}
    }
    .img{
        transform: scale(0.9);
        margin-top: 2.5em;
        margin-left: 8em;
    }
    .start{
        margin-top: -0.5em;
    }


`

export default estilos_home