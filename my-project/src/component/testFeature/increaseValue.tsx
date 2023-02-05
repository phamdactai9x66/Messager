import usePreviousValue from 'hooks/usePreviousValue'
import React, { useImperativeHandle } from 'react'
import useInputLocalstorage from 'hooks/useInputLocalstorage'
interface IncreaseValue<T> {
    ref: T
}

const IncreaseValue: React.FC<IncreaseValue<any>> = React.forwardRef(({ ...props }, ref) => {
    const [name, setName] = useInputLocalstorage('nameField', () => '')
    const [address, setAddress] = useInputLocalstorage('addressField', () => '')
    const [toggleValue, setToggleValue] = React.useState(0);
    const oldValue = usePreviousValue(toggleValue);

    return (
        <>
            {oldValue + '|' + toggleValue}
            <p onClick={() => { setToggleValue(e => e + 1) }}>click</p>
            <p> <span>name: </span> <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} /></p>
            <p> <span>address: </span> <input type="text" value={address} onChange={(e) => { setAddress(e.target.value) }} /></p>
        </>
    )
})

export default IncreaseValue