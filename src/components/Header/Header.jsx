import React from 'react';
import { Typography, Grid } from "@material-ui/core"
import styles from "./Header.module.css"

const Header = () => {
    return ( 
    <Grid container spacing={3}  justify="center" className={styles.container}>
        <Grid item component={Typography} xs={12} variant="h1">
            COVID-19
        </Grid>
        <Grid item component={Typography} variant="h4">TRACKER</Grid>
    </Grid>);
}
 
export default Header;