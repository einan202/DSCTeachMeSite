
import { ButtonToolbar, ButtonGroup, Button, Card} from 'react-bootstrap'
import { useState } from 'react'


const DegreeFilterCard = ({data, handlePick}) => {

    const [currentPicked, setCurrentPicked] = useState(0);

    return (
        <Card style={{ width: '35rem' }}>
            <Card.Title>Choose a Category</Card.Title>
            <ButtonToolbar>
                
                    {data.map((degree) => (
                        <Button
                        className='mr-2 mt-2 ml-2 mb-2'
                        variant="primary"
                        value={degree.id}
                        active={currentPicked === degree.id}
                        onClick={(e) => {
                        setCurrentPicked(e.currentTarget.value)
                        handlePick(degree.courses)
                    }}
                        >
                            {degree.name}
                        </Button>
                    ))}
                
            </ButtonToolbar>
        </Card>
    )
}

export default DegreeFilterCard
