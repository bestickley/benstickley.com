import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

interface BlogCardProps {
  title: string;
  description: string;
}

export default function BlogCard({
  title,
  description,
}: BlogCardProps): JSX.Element {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read</Button>
      </CardActions>
    </Card>
  );
}
