import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import DeliveryAddressForm from './DeliveryAddressForm';
import OrderSummary from './OrderSummary';

const steps = ['Login', 'Delivery Address', 'Order Summary', 'Payment'];

export default function Checkout() {
    const [activeStep, setActiveStep] = React.useState(0);

    // ---------------adding to params starts-------------------------
    const location = useLocation();
    const querySearch = new URLSearchParams(location.search);

    const step = querySearch.get("step");
    // ---------------adding to params  ends-------------------------


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    // ---------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------
    //----------------------------------------skip and reset deleted--------------------------------------
    // ---------------------------------------------------------------------------------------------------
    // ---------------------------------------------------------------------------------------------------


    return (
        <div className='px-10 lg:px-20'>
            <Box sx={{ width: '100%' }}>
                {/* edited */}
                <Stepper activeStep={step}>
                    {/* edited */}

                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                        {/* removed */ }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>{label}</StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length ? (
                    <React.Fragment>
                        <Typography sx={{ mt: 2, mb: 1 }}>
                            All steps completed - you&apos;re finished
                        </Typography>
                        {/* // ---------------------------------------------------------------------------------------------------
                    // ---------------------------------------------------------------------------------------------------
                    //----------------------------------------skip button deleted------------------------------------------------
                    // ---------------------------------------------------------------------------------------------------
                    // ---------------------------------------------------------------------------------------------------
                     */}
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        {/* removed step number */}
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="inherit"
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                sx={{ mr: 1 }}
                            >
                                Back
                            </Button>
                            {/* // ---------------------------------------------------------------------------------------------------
                        // ---------------------------------------------------------------------------------------------------
                        //----------------------------------------deleted------------------------------------------------
                        // ---------------------------------------------------------------------------------------------------
                        // --------------------------------------------------------------------------------------------------- */}
                        </Box>

                        <div className='mt-10'>
                            {step == 2 ? <DeliveryAddressForm /> : <OrderSummary />}
                        </div>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
}