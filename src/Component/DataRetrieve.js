import { Avatar, Card, CardContent, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardItem from "./CardItem";

const useStyle = makeStyles((theme) => ({
  selectedCard: {
    // width:'100%',
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
    marginTop: "34px",
  },
  selectedCardItem: {
    borderRadius: "12px",
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    boxShadow: ` 20px -20px 60px #bebebe,
             -20px 20px 60px #ffffff`,
  },
  selectedCardSection: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    justifyItems: "center",
    "& p": {
      margin: 0,
      padding: 0,
      color: "white",
    },
    "& h3": {
      textDecoration: "underline",
      fontWeight: 700,
      fontSize: "34px",
      margin: "2px",
      color: "black",

      "& span": {
        color: "red",
        fontSize: "36px",
      },
    },
  },
  large: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

export default function DataRetrieve() {
  const classes = useStyle();
  const [user, setUser] = useState([]);

  const [selectedUser, setSelectedUser] = useState({
    gender: "",
    name: "",
    location: "",
    picture: "",
    street: "",
    timezone: "",
  });

  useEffect(() => {
    retrieveData();
  }, []);

  const retrieveData = async () => {
    let da = await axios.get(
      "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=20"
    );

    setUser(da.data.results);
  };

  const selectedUserR = (e) => {
    let { name, location, picture, gender } = e;
    setSelectedUser({
      gender,
      name,
      location,
      picture,
      street: location.street,
      timezone: location.timezone,
    });
  };

  return (
    <div className="userDataManipultaion">
      <Grid container className={classes.selectedCard}>
        <Grid item lg={8} md={8} xs={8}>
          <Card className={classes.selectedCardItem}>
            <CardContent className={classes.selectedCardSection}>
              {!selectedUser.name ? (
                <>
                  <Skeleton
                    variant="circle"
                    width={120}
                    height={120}
                    animation="wave"
                  />

                  <Skeleton
                    variant="rect"
                    width={390}
                    height={38}
                    animation="wave"
                  />
                </>
              ) : (
                <>
                  <div className="picture">
                    <Avatar
                      src={selectedUser.picture.large}
                      className={classes.large}
                    />
                  </div>
                  <div className="details">
                    <h3>
                      <span>{selectedUser.name.title}</span>{" "}
                      {selectedUser.name.first} {selectedUser.name.last}
                    </h3>
                    <p>
                      {selectedUser.street.name},{selectedUser.location.city},
                      {selectedUser.location.state} ,
                      {selectedUser.location.country} ,
                      {selectedUser.location.postcode}
                    </p>
                    <p>
                      {selectedUser.timezone.offset},
                      {selectedUser.timezone.description}
                    </p>
                    <p>{selectedUser.gender}</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <CardItem user={user} selectedUser={selectedUserR} />
    </div>
  );
}
