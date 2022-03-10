import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@material-ui/core/Grid';


const Tasks = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(window.$dir + '/v1/task/', {
        mode: 'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      );
      const parsedRes = await res.json();
      setTasks(parsedRes);
    }
    fetchData();
  }, [])

  return (
    <>
      <Grid container spacing={0} direction="column"
        alignItems="center" justifyContent="center" style={{ minHeight: '100vh' }}
      >
        <h2>Tareas</h2>
        {
          tasks && tasks.map((task, index) => {
            return (
              <Grid item xs={3} key={index}>
                <Card sx={{ minWidth: 275 }} variant="outlined" >
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Task
                    </Typography>
                    <Typography variant="h5" component="div">
                      {task.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {task.description}
                    </Typography>
                    {
                      task.status == 'DONE' ?
                        <Typography variant="body2" style={{ color: 'GREEN' }}>
                          {task.status}
                        </Typography>
                        :
                        task.status == 'DOING' ?
                          <Typography variant="body2" style={{ color: 'BLUE' }}>
                            {task.status}
                          </Typography>
                          :
                          task.status == 'REVIEW' ?
                            <Typography variant="body2" style={{ color: 'RED' }}>
                              {task.status}
                            </Typography>
                            :
                            <Typography variant="body2" style={{ color: 'ORANGE' }}>
                              {task.status}
                            </Typography>
                    }
                  </CardContent>
                </Card>
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default Tasks