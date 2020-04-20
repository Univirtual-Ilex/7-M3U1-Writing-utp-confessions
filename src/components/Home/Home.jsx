import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import estilos_home from './Home_styles'
import {ICol} from '../Grid'
import { ButtonLink } from '../ButtonX'

const Home_base = function ({staticContext, ...props}) { // se le pasan las props para recibir los styled components

    return (
        <Container {...props}  row bgImage="src/bg.png" >

                    <div className='bloque-izquierdo entrada-top-Y-2'>
                        <div className='bloque-izquierdo-container'>
                            <h1> UTP confessions</h1>
                            <p>
                            Go to the internet and read some information about one influential person who has made important contributions in your academic field. Take notes and write a text that is similar to Malala’s text. Write in no less than 150 words.</p>
                            <ButtonLink  className="start" to='/actividad1'>Start</ButtonLink>
                        </div>
                    </div>
                    <div className='bloque-derecho entrada-top-Y-3'>
                    	<ICol>
	                        <figure>
	                            <img className="img" src='./src/cover.png' alt='Logo' />    
	                        </figure>
                    	</ICol>

                    </div>

        </Container>
    )
}

const Home = styled(Home_base)`
    ${ estilos_home }
`

export default Home