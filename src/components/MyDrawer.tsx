import React from "react";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import MyDrawerList from "./MyDrawerList";
import {} from "@material-ui/styled-engine";

interface NavDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      boxSizing: "border-box",
      width: drawerWidth,
    },
  })
);

export default function MyDrawer({
  drawerOpen,
  setDrawerOpen,
}: NavDrawerProps): JSX.Element {
  const classes = useStyles();

  return (
    <nav className={classes.drawer} aria-label="side bar navigation">
      <Hidden smUp>
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={() => setDrawerOpen(!drawerOpen)}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <MyDrawerList />
        </Drawer>
      </Hidden>
      <Hidden smDown>
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          <MyDrawerList />
        </Drawer>
      </Hidden>
    </nav>
  );
}
