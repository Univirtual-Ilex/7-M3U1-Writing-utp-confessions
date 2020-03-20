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


const Actividad_base =  ({staticContext, ...props}) => {
	
	const [modalFlag, setModal] = useState(false)
	const [passed, setPassed] = useState(false)

	const [inputOk, setInput] = useState(false)
	const [inputErr, setInputErr] = useState(false)





	const checkAnswers = () =>{
		if(passed){
			window.location.href = '/actividad2'
		}
	}
	
	const checkText = (text) => {
		if(text.split(' ').length >= 150){
			setInput(true)
			setInputErr(false)
			setPassed(true)
		}else{
			setPassed(false)
		}
	}


    return (
        <Container bgImage='./src/bg_actividad1.png' {...props} h={40} w={75} id="area">
        	
            <div className="" > 
	            <UiButtonsContainer>
	                <ButtonUi icon='ilx-ayuda' tooltip='Write about your experiences, not less than 150 words' />
	                <ButtonUi icon='ilx-volver' tooltip='Start Again' onClick={ () => {window.location.href = '/actividad1'} } />
	            </UiButtonsContainer>
	            <IRow pt={5} className="text-center">
	                <ICol >
	                    <MainTitle className="title" color={Ilex.violeta2} size={1.5}>
	                    GO TO THE INTERNET AND READ SOME INFORMATION ABOUT ONE INFLUENTIAL PERSON.  WRITE A TEXT NO LESS THAN 150 WORDS
	                    </MainTitle>  
	                </ICol>
	            </IRow>

	            <IRow justify='center' align='center' pt={2} gutters={0.5} >
	            	<ICol w={25} className="text" >
	            		<div  ><p>
							<strong>Example:</strong> <br/><br/> 
							Malala Yousafzai is from Pakistan. She was born on July 12, 1997. 
							She is an activist for women’s rights and became the youngest person 
							to be awarded the Nobel Peace Prize in 2014.The young woman is famous 
							for her advocacy for female education in her native country, Pakistan. 
							She was born into a family of progressive thinkers and educationists.
							Malala started expressing her frustration over the restrictive practices 
							of the Taliban in an anonymous blog when she was just 11 years old. 
							Very mature and intelligent for her young age, courageously wrote
							about how the Taliban were attempting to control her town and trying 
							to prevent girls from going to school. Her blog gained attention from
							people around the world and she soon became popular as an emerging 
							activist who campaigned for girls’ rights to education. Her father 
							motivated her to express her opinions. This caused bad reactions from 
							the Taliban, which wanted to kill her. One day when she was returning 
							from school, she was attacked by a gunman. The girl survived the horrific
							attack and retuned to activism even more determined than before. 
							She gave a speech at the United Nation on her 16th birthday 
							in 2013; The UN named the event "Malala Day". The same year, 
							her autobiography, ‘I Am Malala: The Girl Who Stood Up for Education
							and Was Shot by the Taliban’ was published. She continues her activism 
							with even more</p> 
						</div>
	                </ICol>
	                <ICol w={60} >
	                	<InputWords ok={inputOk} err={inputErr} changeCheck={checkText} />
	                	150
	                	<ButtonDown text={'check'} onClick={checkAnswers} ></ButtonDown>
	                </ICol>
	            </IRow>
            </div>
        </Container>
    )

}


const Actividad = styled(Actividad_base)`
    ${ styles.mistyles }
`


export default Actividad