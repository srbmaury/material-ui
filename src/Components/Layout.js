import { makeStyles } from '@mui/styles'
import React from 'react'
import { Drawer, Typography, List, ListItem, ListItemIcon, ListItemText, ListItemButton, AppBar, Toolbar, Avatar } from '@mui/material';
import { AddCircleOutlined, Calculate, SubjectOutlined } from '@mui/icons-material';
import { useHistory, useLocation } from 'react-router-dom';
import { format } from 'date-fns';

const drawerWidth = 240

const useStyles = makeStyles((theme) => {
    return{
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding:theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            backgroundColor: '#f4f4f4'
        },
        title:{
            padding: theme.spacing(2)
        },
        appbar:{
            backgroundColor:'white !important',
            color:'black !important',
            width: `calc(100vw - ${drawerWidth}px) !important`
        },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow:1
        },
        avatar:{
            marginLeft: theme.spacing(2)
        }
    }
})
const Layout = ({ children }) => {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined color='primary' />,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlined color='primary' />,
            path: '/create'
        },
    ]
    return (
        <div className={classes.root}>
            {/* App Bar  */}
            <AppBar
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y') }
                    </Typography>
                    <Typography>
                        Saurabh Maurya
                    </Typography>
                    <Avatar 
                        src='/avatar.jpg' 
                        className={classes.avatar}
                    />
                </Toolbar>
            </AppBar>
            {/* Side drawer  */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor='left'
                classes={{ paper: classes.drawerPaper }}
            >
                <div>
                    <Typography 
                        variant='h5'
                        className={classes.title}
                    >
                        My Notes
                    </Typography>

                    {/* List - links */}
                    <List>
                        {menuItems.map(item => (
                            <ListItem
                                key={item.text}
                                onClick={() => history.push(item.path)}
                                className={location.pathname == item.path ? classes.active : null}
                            >
                                <ListItemButton>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
