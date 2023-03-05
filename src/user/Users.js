import React, {useState, useEffect} from 'react'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PersonIcon from '@mui/icons-material/Person';
import {Link} from 'react-router-dom'
import {list} from './api-user.js'



export default function Users() { 
  const [users, setUsers] = useState([])
  console.log(users)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    list(signal).then((data) => {
      if (data && data.error) {
        console.log(data.error)
      } else {
        setUsers(data)
      }
    })

    return function cleanup(){
      abortController.abort()
    }
  }, [])

    return (
      <Paper className="m-2" elevation={4}>
        <Typography variant="h6" className='m-2'>
          All Users
        </Typography>
        {!users? <h2>No data Found</h2> :(
          <List dense>
         {users.map((item, i) => {
          return <Link to={"/user/" + item._id} key={i}>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <PersonIcon/>
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary={item.name}/>
                      <ListItemSecondaryAction>
                      <IconButton>
                          <ArrowForwardIcon/>
                      </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                 </Link>
          })
        }
        </List>
        )
        
        }
        
      </Paper>
     
    )
}
