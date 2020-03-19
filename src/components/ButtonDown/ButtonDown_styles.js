import { css } from 'styled-components'
import Ilex from '../../App/variables'
const styles = css`
display: block;
position: relative;
button{

    background-color: #fff;
    font-family:${Ilex.titulos};
    color: white;
    background-color: ${Ilex.morado};
    text-transform:uppercase;
    font-weight:bold;
    padding:0.8em 3em ;
    border-radius: 0.5em;
    position: absolute;
    top:-1.3em;
    right:0;
    cursor:pointer;
    box-shadow: 0 0.5em 0.5em 0 rgba(0,0,0,0.1);
    &:hover{
        background-color: ${Ilex.violeta2};
        color:#fff;
        border:2px solid #fff;
    }
}

`

export default styles
    