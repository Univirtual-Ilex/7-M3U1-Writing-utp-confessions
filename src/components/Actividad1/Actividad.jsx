import React, {useState} from 'react'
//Components
import Container from '../Container'
import MainTitle from '../MainTitle'
import ButtonUi from '../ButtonControlUI'
import {ICol, IRow} from '../Grid'
// Styles
import styled from 'styled-components'
import styles, { UiButtonsContainer } from './Actividad_styles'
import Ilex from '../../App/variables'
import PreguntaTF from '../PreguntaTF'

// Data
import Data from './Actividad_data'

import BocinaButton from '../BocinaButton'

import ButtonCheck from '../ButtonCheck'
import InputWords from '../InputWords'
import ButtonDown from '../ButtonDown'

import Tooltip from '../Tooltip'


const Actividad_base =  ({staticContext, ...props}) => {
	
	const [modalFlag, setModal] = useState(false)
	const [passed, setPassed] = useState(false)

	const [inputOk, setInput] = useState(false)
	const [inputErr, setInputErr] = useState(false)

	const [tooltipError, setTooltipError] = useState(false)


	const closetooltip = () => {
        setTooltipError(!tooltipError)
    }

	const checkAnswers = () =>{
		if(passed){
			window.location.href = '/actividad2'
		}else{
			setTooltipError(true)
		}
	}
	
	const checkText = (text) => {
		if(text.match(/\S+/g) && text.match(/\S+/g).length >= 150){
			setInput(true)
			setInputErr(false)
			setPassed(true)
		}else{
			setPassed(false)
		}
	}


    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={45} w={80} id="area">
        	
            <div className="" > 
	            <UiButtonsContainer>
	                <ButtonUi icon='ilx-ayuda' tooltip='Click on the audio to hear the description, then answer' />
	                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
	            </UiButtonsContainer>
	            <IRow pt={5} className="text-center">
	                <ICol py={ 0.5 }>
	                    <MainTitle color={Ilex.violeta2} size={1.5}>
	                    GO TO THE INTERNET AND READ SOME INFORMATION ABOUT ONE INFLUENTIAL PERSON. WRITE A TEXT NO LESS THAN 150 WORDS
	                    </MainTitle>  
	                </ICol>
	            </IRow>

	            <IRow justify='center' align='center' pt={3} w={100} gutters={0.5} >
	            	<ICol w={25} className="text" >
	            		<div  ><p><strong>Example:</strong> <br/><br/> Malala Yousafzai is from Pakistan. She was
born on July 12, 1997. She is an activist for
women’s rights and became the youngest
person to be awarded the Nobel Peace Prize
in 2014.The young woman is famous for her
advocacy for female education in her native
country, Pakistan. She was born into a family
of progressive thinkers and educationists.
Malala started expressing her frustration over
the restrictive practices of the Taliban in an
anonymous blog when she was just 11 years
old. Very mature and intelligent for her young
age, courageously wrote about how the
Taliban were attempting to control her town
and trying to prevent girls from going to
school. Her blog gained attention from
people around the world and she soon
became popular as an emerging activist who
campaigned for girls’ rights to education. Her
father motivated her to express her opinions.
This caused bad reactions from the Taliban,</p> </div>
	                </ICol>
	                <ICol w={60} >
	                	<InputWords ok={inputOk} err={inputErr} changeCheck={checkText} />
	                	150
	                	<ButtonDown text={'check'} onClick={checkAnswers} ></ButtonDown>
	                </ICol>
	            </IRow>
            </div>
            <Tooltip visible={tooltipError} closebtn={closetooltip} w={30} pos={"70em, 50em"}>
                <h3>Error</h3>
                <p>Please complete the 150 words</p>
            </Tooltip>
        </Container>
    )

}


const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad