import React from 'react'
import { Button, Typography, TextField } from '@mui/material';
import IncreaseValue from 'component/testFeature/increaseValue';
import { store } from '../firebase';
import { listAll, ref, getDownloadURL } from 'firebase/storage';
interface TestFeature<T> {

}
const listRef = ref(store, '/fileImage')

const TestFeature: React.FC<TestFeature<any>> = ({ ...props }) => {
    const storaFeature = React.useRef<any>(null);
    const increaseValue = (value: number = 1) => () => {
        const getInput = storaFeature.current.getElement.current as HTMLInputElement
        getInput && getInput.focus();
        return storaFeature.current.increaseValue(value)()
    }
    React.useEffect(() => {
        listAll(listRef).then(res => {
            res.items.forEach(async (e) => {
                console.log(e.name)
                const urlImage = await getDownloadURL(e)
                const response = await fetch(urlImage);
                if (e.name.indexOf('json') !== -1) {
                    // console.log(response);
                    fetch(urlImage).then(res => res.json()).then(res => {
                        console.log(res);
                    })
                    return
                }
                // here image is url/location of image
                const blob = await response.blob();
                const file = new File([blob], e.name, { type: blob.type });
                // console.log(file)
            })
        }).catch(err => {
            console.log(err)
        })
        return () => {

        }
    }, [])

    return (
        <>
            <IncreaseValue ref={storaFeature} />
            <Button onClick={increaseValue()} >increase root</Button>
        </>
    )
}

export default TestFeature