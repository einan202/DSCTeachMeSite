import { Button, ButtonGroup} from 'react-bootstrap'
import { useState } from 'react'

const CoursesFilterOption = ({text}) => {
    const [isPicked, setIsPicked] = useState(false);

    return (
        <div>
            <ButtonGroup className='mr-2 mt-2 ml-2'>
                <Button 
                variant='secondary'
                onClick={() => setIsPicked(!isPicked)}
                active={isPicked? true : false}
                >
                    {text}
                </Button>
            </ButtonGroup>

        </div>
    )
}

export default CoursesFilterOption
