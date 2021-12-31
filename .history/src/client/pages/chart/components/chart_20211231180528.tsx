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
import { makeStyles } from '@material-ui/styles';
interface PageProps {}
const useStyles = makeStyles({
    root: {
        backgroundColor: 'red',
    display
    },
});

const App: FC<PageProps> = () => {
    const classes = useStyles();
    return (
        <div>
            <List sx={{ mb: 2, marginBottom: '0px' }}>
                {chartList.map(({ id, nickname, content, isMe }) => (
                    <React.Fragment key={id}>
                        {isMe ? (
                            <ListItem button>
                                <ListItemText
                                    primary={nickname}
                                    secondary={content}
                                />
                                <ListItemAvatar className={classes.root}>
                                    <Avatar alt="Profile Picture" />
                                </ListItemAvatar>
                            </ListItem>
                        ) : (
                            <ListItem button>
                                <ListItemAvatar className={classes.root}>
                                    <Avatar alt="Profile Picture" />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={nickname}
                                    secondary={content}
                                />
                            </ListItem>
                        )}
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
