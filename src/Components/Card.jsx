import React from 'react'
import { Card, CardContent } from '@mui/material';

const CardItem = (props) => {
  return (
    <>
    <div>
        <Card className="w-full grid grid-cols-[300px_1fr] gap-6 items-center">
          <img src={props.img} width={300} height={300} alt="Person" className="rounded-lg object-cover" />
          <CardContent>
            <h1> Hello {props.name}</h1>
            <p>This is a profile decription of {props.name}</p>
          </CardContent>
        </Card>
    </div>
    
    </>
  )
}

export default CardItem