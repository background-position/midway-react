import React, { useState, useEffect, FC } from 'react';
import { chartList } from './res';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Avatar from '@mui/material/Avatar';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
interface PageProps {}
const messages = [
    {
        id: 1,
        nickname: 'Brunch this week?',
        content:
            "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        nickname: 'Birthday Gift',
        content: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        nickname: 'Recipe to try',
        content:
            'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        nickname: 'Yes!',
        content: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        nickname: "Doctor's Appointment",
        content:
            'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        nickname: 'Discussion',
        content: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 7,
        nickname: 'Summer BBQ',
        content: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];

const StyledFab = styled(Fab)({
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
});
const App: FC<PageProps> = () => {
    return (
        <div>
            <List sx={{ mb: 2, marginBottom: '0px' }}>
                {chartList.map(({ id, nickname, content, person }) => (
                    <React.Fragment key={id}>
                        <ListItem button>
                            <ListItemAvatar>
                                <Avatar alt="Profile Picture" />
                            </ListItemAvatar>
                            <ListItemText
                                primary={nickname}
                                secondary={content}
                            />
                        </ListItem>
                    </React.Fragment>
                ))}
            </List>
            <AppBar position="sticky" sx={{ top: 'auto', bottom: 0 }}>
                <TextField id="outlined-basic" variant="outlined" />
            </AppBar>
        </div>
    );
};
export default App;