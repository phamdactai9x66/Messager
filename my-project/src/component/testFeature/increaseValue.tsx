import React, { useImperativeHandle } from 'react'
import { Button, Typography, TextField } from '@mui/material'
interface IncreaseValue<T> {
    ref: T
}

const IncreaseValue: React.FC<IncreaseValue<any>> = React.forwardRef(({ ...props }, ref) => {
    const [increase, setIncrease] = React.useState(0);
    const getElement = React.useRef(null);
    const test1 = (step: number = 1) => () => setIncrease(e => e + step);

    useImperativeHandle(ref, () => {
        return {
            increaseValue: test1,
            getElement
        }
    })
    console.log('test1')
    return (
        <>
            <TextField label="Price" ref={getElement} />
            <Typography >{increase}</Typography>
            <Button onClick={test1(2)}>increase</Button>
        </>
    )
})

export default IncreaseValue