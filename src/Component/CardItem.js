import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  cardRow: {
    display: "flex",
    flexWrap: "wrap",
    alignContent: "center",
    alignItem: "center",
    justifyContent: "space-around",
    marginTop: "34px",
  },
  card: {
    width: 300,
    height: "150px",
    margin: "10px",

    borderRadius: "9px",
    background: "#e0e0e0",
    "&:nth-child(even)": {
      boxShadow: `20px 20px 60px #bababa,
             -20px -20px 60px #ffffff`,
    },
    "&:nth-child(odd)": {
      boxShadow: `-20px 20px 60px #bebebe,
            20px -20px 60px #ffffff`,
    },
  },
  // #bebebe
  selectCard: {
    width: 300,
    height: "150px",
    margin: "5px",

    borderRadius: "9px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    color: "white",
  },
  cardBtn: {
    width: "100%",
    height: "100%",
  },

  headerSectionCard: {
    fontSize: "12px",

    marginTop: "0",
    marginBottom: "0px",
    display: "flex",
    justifyContent: "space-between",
  },
  Img: {
    position: "absolute",
    top: "-10px",
    right: "0",
    width: "75px",
    height: "83px",
    boxShadow: "0px .1em 1rem #111",
  },
  middleSectionCard: {
    "& h3": {
      padding: "0",
      margin: "0px",
      fontSize: "19px",
      fontWeight: 600,
    },
  },

  footerSectionCard: {
    "& p": {
      color: "red",
    },
  },
}));

///// selected wale card ka he background change hona hai yha uske liye state leni pdegi ya qki yha card ki position change ho rhi hai

export default function CardItem({ user, selectedUser, loading }) {
  const classes = useStyle();

  const [selectedCard, setSelectedCard] = useState(null);

  const checkName = (e) => {
    selectedUser(e);
    setSelectedCard(e.name.first);
  };
  return (
    <div>
      <Grid container spacing={7}>
        <Grid item lg={12} className={classes.cardRow}>
          {user.map((e, index) => (
            <Card
              className={
                selectedCard === e.name.first
                  ? classes.selectCard
                  : classes.card
              }
              key={index}
            >
              <CardActionArea
                onClick={() => checkName(e)}
                className={classes.cardBtn}
              >
                <CardContent>
                  <div className={classes.headerSectionCard}>
                    <p>
                      {e.gender.toUpperCase()}. {e.nat}
                    </p>
                    <Avatar
                      src={e.picture.medium}
                      className={classes.Img}
                      variant="rounded"
                    />
                  </div>
                  <div className={classes.middleSectionCard}>
                    <h3>
                      {e.name.title} {e.name.first} {e.name.last}
                    </h3>
                  </div>
                  <div className={classes.footerSectionCard}>
                    <p>{e.email}</p>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
}
