import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import skeleton from '../Assets/skeleton.jpg'

// const useStyles = makeStyles(theme => ({
//   card: {
//     maxWidth: 600,
//     margin: 'auto',
//     marginTop: theme.spacing(5),
//     marginBottom: theme.spacing(5)
//   },
//   title: {
//     padding:`${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
//     color: theme.palette.openTitle
//   },
//   media: {
//     minHeight: 400
//   },
//   credit: {
//     padding: 10,
//     textAlign: 'right',
//     backgroundColor: '#ededed',
//     borderBottom: '1px solid #d0d0d0',
//     '& a':{
//       color: '#3f4771'
//     } 
//   }
// }))

export default function Home(){
    return (
        <Card className="max-w-2xl m-auto my-10">
          <Typography variant="h6" className="p-2.5">
            Home Page
          </Typography>
          <CardMedia className="hero-img" image={skeleton} title="Unicorn Bicycle"/>
          <CardContent>
            <Typography variant="body1" component="p">
              Welcome to the MERN Skeleton home page.
            </Typography>
          </CardContent>
        </Card>
    )
}

