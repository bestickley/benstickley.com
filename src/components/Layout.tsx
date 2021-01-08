import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import MyDrawer from "src/components/MyDrawer";
import MyAppBar from "src/components/MyAppBar";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    root: {
      display: "flex",
    },
    toolbar: theme.mixins.toolbar,
  })
);

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): JSX.Element {
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );
  const upMd = useMediaQuery(theme.breakpoints.up("md"));
  const [drawerOpen, setDrawerOpen] = React.useState(upMd);

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <MyAppBar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <MyDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
