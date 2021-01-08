import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import ChatIcon from "@material-ui/icons/Chat";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import { Link } from "gatsby";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      color: "white",
      textDecorationLine: "initial",
    },
    toolbar: theme.mixins.toolbar,
  })
);

export default function MyDrawerList(): JSX.Element {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText>
            <Link className={classes.link} to="/blog">
              Blog
            </Link>
          </ListItemText>
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <EmojiPeopleIcon />
          </ListItemIcon>
          <ListItemText>
            <Link className={classes.link} to="/about">
              About Me
            </Link>
          </ListItemText>
        </ListItem>
      </List>
    </React.Fragment>
  );
}
