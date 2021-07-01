import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Card1 from './Cards/ReproductiveHealth/card1';
import Card2 from './Cards/ReproductiveHealth/card2';
import Card3 from './Cards/ReproductiveHealth/card3';
import Card4 from './Cards/ReproductiveHealth/card4';
import Card5 from './Cards/ReproductiveHealth/card5';
import Card6 from './Cards/ReproductiveHealth/card6';
import Card7 from './Cards/ReproductiveHealth/card7';
import Card8 from './Cards/ReproductiveHealth/card8';


export default function ReproductiveHealth(){

    const userEmail = useSelector( state => state.userEmail.email);
    const [step,setState] = useState(1);
    const [reproductiveHealthDetails,setReproductiveHealthDetails] = useState({
        sexLife:'',
        menstrualCondition:'',
        symptoms:[],
        densityOfBodyHairs:'',
        exercise:'',
        junkConsumption:'',
        smoking:'',
        drugUsage:''
    });

    const handleChangeSymptoms = (e)=>{
        e.preventDefault();
        setReproductiveHealthDetails({...reproductiveHealthDetails,symptoms:e.target.value});
    }


 const handleChange = (e)=>{
    e.preventDefault();
    setReproductiveHealthDetails({...reproductiveHealthDetails,[e.target.name]:e.target.value});
}
    const nextStep = () => {
       setState(prevState => prevState+1);
    }

    const prevStep = () => {
        setState(prevState => prevState-1);
    }

    const onSubmit = e =>{
        e.preventDefault();

        const reproductiveHealthTracker = {
            email:userEmail,
            sexLife:reproductiveHealthDetails.sexLife,
            menstrualCondition:reproductiveHealthDetails.menstrualCondition,
            symptoms:reproductiveHealthDetails.symptoms,
            densityOfBodyHairs:reproductiveHealthDetails.densityOfBodyHairs,
            exercise:reproductiveHealthDetails.exercise,
            junkConsumption:reproductiveHealthDetails.junkConsumption,
            smoking:reproductiveHealthDetails.smoking,
            drugUsage:reproductiveHealthDetails.drugUsage
        }
        
        axios.post('/reproductiveHealth',reproductiveHealthTracker)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        });
    }

    console.log(reproductiveHealthDetails);

    switch(step) {
            case 1:
                return <Card1
                        nextStep={nextStep}
                        handleChange={handleChange}
                        sexLife={reproductiveHealthDetails.asexLife}
                        />
            case 2:
                return <Card2
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChange}
                        menstrualCondition={reproductiveHealthDetails.menstrualCondition}
                        />
            case 3:
                return <Card3
                        nextStep={nextStep}
                        prevStep={prevStep}
                        handleChange={handleChangeSymptoms}
                        symptoms={reproductiveHealthDetails.symptoms}
                      
                        />
        
            case 4:
                    return <Card4
                            nextStep={nextStep}
                            handleChange={handleChange}
                          densityOfBodyHairs={reproductiveHealthDetails.densityOfBodyHairs}
                            />
                case 5:
                    return <Card5
                            nextStep={nextStep}
                            prevStep={prevStep}
                            handleChange={handleChange}
                            exercise={reproductiveHealthDetails.exercise}
                            />
                case 6:
                    return <Card6
                            nextStep={nextStep}
                            prevStep={prevStep}
                            handleChange={handleChange}
                            junkConsumption={reproductiveHealthDetails.junkConsumption}
                           
                            />
                
                case 7:
                        return <Card7
                                nextStep={nextStep}
                                handleChange={handleChange}
                                smoking={reproductiveHealthDetails.smoking}
                                />
                    case 8:
                        return <Card8
                                nextStep={nextStep}
                                prevStep={prevStep}
                                handleChange={handleChange}
                              drugUsage={reproductiveHealthDetails.drugUsage}
                              onSubmit={onSubmit}
                                />
                   
                                
                    
                    
                    }
        };
      