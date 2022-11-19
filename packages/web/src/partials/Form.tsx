import React, { useCallback, useContext, useMemo, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  ListSubheader,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HideSourceOutlinedIcon from '@mui/icons-material/HideSourceOutlined';

import { ZipChallengeContext } from 'contexts/ZipChallengeContext';
import { useHandleSearchMutation } from 'generated/graphql';
import { grouped, supportedCountries, SupportedCountry } from 'consts/supportedCoutries';

type FormProps = {
  onSubmit(): void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [noResultDialog, setNoResultDialog] = useState(false);

  const { input, updateInput, searchResult, setSearchResult, setHasError } = useContext(ZipChallengeContext);

  const selectedCountry = useMemo(
    () => supportedCountries.find((sc) => sc.code === input.country) as SupportedCountry,
    [input.country],
  );

  const [handleSearchMutation, { loading }] = useHandleSearchMutation();

  const handleSearch = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try {
        const { data } = await handleSearchMutation({
          variables: { input },
        });

        if (!data?.handleSearch) {
          setNoResultDialog(true);
          return;
        }

        setSearchResult(data.handleSearch);
        onSubmit();
      } catch (error) {
        setHasError(true);
        console.log(JSON.stringify(error));
      }
    },
    [handleSearchMutation, input, onSubmit, setSearchResult, setHasError],
  );

  const reset = useCallback(() => {
    updateInput({ country: 'US', zipCode: '' });
    setSearchResult(null);
  }, [updateInput, setSearchResult]);

  return (
    <Container component="form" maxWidth="md" onSubmit={handleSearch}>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Enter your search:
        </Typography>
        <Box sx={{ mt: 1 }} width="100%">
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <FormControl sx={{ minWidth: 300 }} fullWidth required>
                <InputLabel id="demo-simple-select-helper-label">Country</InputLabel>
                <Select
                  name="country"
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  label="Country"
                  value={input.country}
                  onChange={(e) => updateInput({ country: e.target.value })}
                >
                  {Object.keys(grouped).map((key) => [
                    <ListSubheader key={key}>{key}</ListSubheader>,
                    ...grouped[key].map(({ name, code }) => (
                      <MenuItem key={code} value={code}>
                        {name}
                      </MenuItem>
                    )),
                  ])}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                name="zipCode"
                required
                label={`Zip code (range: ${selectedCountry.range})`}
                value={input.zipCode}
                onChange={(e) => updateInput({ zipCode: e.target.value.trim() })}
                fullWidth
                sx={{ minWidth: 300 }}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} disabled={!input.zipCode || loading}>
            <SearchIcon sx={{ mr: 1 }} />
            Search
          </Button>
          {searchResult && (
            <Button type="button" fullWidth variant="outlined" sx={{ mt: 3 }} onClick={reset} disabled={loading}>
              <HideSourceOutlinedIcon sx={{ mr: 1 }} />
              Reset
            </Button>
          )}
        </Box>
      </Box>
      <Dialog
        open={noResultDialog}
        onClose={() => setNoResultDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Ops...</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your search did not match any result. Double check on ranges before trying again!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setNoResultDialog(false)} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default Form;
