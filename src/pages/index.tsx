import React from "react";
import Typography from "@material-ui/core/Typography";
import Layout from "src/components/Layout";
import { StylesProvider } from "@material-ui/core";

export default function Home(): JSX.Element {
  return (
    <StylesProvider injectFirst>
      <Layout>
        <Typography paragraph>
          Hi there. My name is Ben. I&apos;m a Christian, Husband, Father, and
          Full Stack Web Developer in Virginia Beach, VA.
        </Typography>
        <Typography paragraph>
          Welcome, I&apos;m glad you&apos;re here.
        </Typography>
      </Layout>
    </StylesProvider>
  );
}
