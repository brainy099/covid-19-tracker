import React, {useState, useEffect} from "react"
import { NativeSelect, FormControl, Typography } from "@material-ui/core"
import { fetchCountries } from "../../api"

import styles from "./CountryPicker.module.css"

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI()
  }, [setFetchedCountries])

  return (
    <React.Fragment>
      <Typography variant="h5" style={{marginBottom: "2vh"}}>Select Country:</Typography>
      <FormControl className={styles.formControl}>
          <NativeSelect defaultValue="" onChange={(e) => e.target.value==="global"?handleCountryChange(''):handleCountryChange(e.target.value) }>
            <option value="global">Global</option>
            {fetchedCountries.map((country,i )=> <option key={i} value={country}>{country}</option>)}
          </NativeSelect>
      </FormControl>
    </React.Fragment>)
}

export default CountryPicker