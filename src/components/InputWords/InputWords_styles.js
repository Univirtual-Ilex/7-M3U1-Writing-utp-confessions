import styled, { css } from 'styled-components'
import Ilex from '../../App/variables'

const styles = css`
display: inline-block;
margin: ${props => props.m || 0}em;
width:${props => props.w ? props.w+'em' : '100%'};
.input-words {
    padding: ${props => props.p || 3 + 'em'};
}

`

export const TextArea = styled.textarea`
border:2px dashed ${Ilex.color_gris_input};
height: 23em;
box-sizing:border-box;
display: block;
border-radius: 0.5em;
box-shadow:0 0.3em 0 0 ${Ilex.color_gris_input};
font-family:${Ilex.font};
font-size:1em;
color:${Ilex.textos};
font-weight:bold;
width:100%;
&.ok{
    border:2px dashed ${Ilex.verde};
}
&.err{
    border:2px dashed ${Ilex.color_rojo};
}

::-webkit-input-placeholder {
   text-align: center;
   vertical-align: middle;
}

:-moz-placeholder { /* Firefox 18- */
   text-align: center;
   vertical-align: middle;  
}

::-moz-placeholder {  /* Firefox 19+ */
   text-align: center;
   vertical-align: middle;  
}

:-ms-input-placeholder {  
   text-align: center;
   vertical-align: middle; 
}

`

export default styles
    