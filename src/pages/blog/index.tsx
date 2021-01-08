import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Layout from "src/components/Layout";
import BlogCard from "src/components/BlogCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

export default function Blog(): JSX.Element {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <BlogCard title="Title" description="Description"></BlogCard>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}
