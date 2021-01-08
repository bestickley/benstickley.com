import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

interface MyAppBarProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
  })
);

export default function MyAppBar({
  drawerOpen,
  setDrawerOpen,
}: MyAppBarProps): JSX.Element {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar>
        <Hidden smUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6" noWrap>
          Ben Stickley
        </Typography>
        <div className={classes.grow} />
        <IconButton onClick={() => (window.location.href = "/")}>
          <TrendingUpIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
