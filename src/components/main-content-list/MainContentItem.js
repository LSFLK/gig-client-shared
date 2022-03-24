import React, {Component} from "react";
import {withStyles} from "@mui/styles";
import Typography from '@mui/material/Typography';
import Styles from "./Styles"
import Grid from "@mui/material/Grid";
import ListItem from "@mui/material/ListItem";
import {Link} from "react-router-dom";
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import moment from 'moment';
import {AppRoutes} from "../../routes/Routes";

class MainContentItem extends Component {

    render() {
        const ignoreCategories = ["News", "PERSON", "ORGANIZATION", "LOCATION", "arbitrary-entities", "OrgChart-Level1"];
        const {classes, imageUrl, title, subtitle, description, categories, elevation} = this.props;
        return (
            <Paper className={classes.paper} elevation={elevation}>
                <ListItem alignItems="flex-start">
                    <Grid container width={1}>
                        <Grid item lg={5}>
                            <Link className={classes.itemLink} to={AppRoutes.entity + title}>
                                <img alt={title} src={imageUrl === "" ? "avatar.png" : imageUrl}
                                     className={classes.searchAvatar}/>
                            </Link>
                        </Grid>
                        <Grid item lg={7}>
                            <div style={{paddingLeft: '20px'}}>
                                <Link className={classes.itemLink} to={AppRoutes.entity + title}>
                                    <Typography className={classes.mainContentItemTitle} variant='h4'><span
                                        className={"news-title"}>{title}</span></Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        {moment(subtitle, 'DD  MMM YYYY h:mm A').fromNow()}
                                    </Typography>
                                    <Typography
                                        className={"news-description"}
                                        style={{marginBottom: '10px'}}
                                        variant="body2"
                                        color="textSecondary"
                                    >
                                        {description?.substring(0, 400)}
                                    </Typography>
                                </Link>
                                <div>
                                    {categories ? categories.map((category) => (
                                        ignoreCategories.includes(category) ? null :
                                            <Link key={category} className={classes.link}
                                                  to={AppRoutes.search + category + ":"}>
                                                <Chip style={{cursor: 'pointer'}}
                                                      size="small"
                                                      label={category}
                                                      variant="outlined"
                                                />
                                            </Link>
                                    )) : null}
                                </div>
                                {/*<RelatedLinkList links={links}/>*/}
                            </div>
                        </Grid>
                    </Grid>
                </ListItem>
            </Paper>
        )
    }
}

export default withStyles(Styles)(MainContentItem);
