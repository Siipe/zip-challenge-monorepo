import { useCallback, useContext, useState } from 'react';
import Button from '@mui/material/Button';

import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import CloseIcon from '@mui/icons-material/Close';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
  Alert,
  AlertTitle,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
} from '@mui/material';

import { ZipChallengeContext } from 'contexts/ZipChallengeContext';
import { useClearSearchHistoryMutation, useGetLastSearchesQuery } from 'generated/graphql';
import Header from 'partials/Header';
import Form from 'partials/Form';
import Footer from 'partials/Footer';
import ResultCard from 'components/ResultCard';

const theme = createTheme();

const App = () => {
  const [confirmationDialog, setConfirmationDialog] = useState(false);

  const { searchResult, hasError, setHasError } = useContext(ZipChallengeContext);

  const [clearSearchHistoryMutation, { loading }] = useClearSearchHistoryMutation();
  const { data: lastSearchesResult, refetch } = useGetLastSearchesQuery({
    variables: {
      limit: 5,
    },
    onError: (error) => {
      console.log(JSON.stringify(error));
      setHasError(true);
    },
  });

  const clearSearchHistory = useCallback(async () => {
    try {
      await clearSearchHistoryMutation();
      setConfirmationDialog(false);
      refetch();
    } catch (error) {
      console.log(JSON.stringify(error));
      setHasError(true);
    }
  }, [clearSearchHistoryMutation, refetch, setHasError]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container>
        {hasError && (
          <Alert
            severity="error"
            action={
              <IconButton aria-label="close" color="inherit" size="small" onClick={() => setHasError(false)}>
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            <AlertTitle>Error</AlertTitle>
            An unexpected error has occurred. We are already working on it. Sorry about that!
          </Alert>
        )}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
          }}
        >
          <Container maxWidth="md">
            <Typography component="h2" variant="h3" align="center" color="text.primary" gutterBottom>
              Welcome to Zip Challenge
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph></Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Postal codes and zip codes made easy
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
              Format over 60 countries
            </Typography>
            <Form onSubmit={refetch} />
          </Container>
        </Box>
        {searchResult && (
          <Container sx={{ pt: 8 }} maxWidth="md">
            <Divider variant="fullWidth" />
            <Grid container spacing={4} pt={2}>
              <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="h4" variant="h5" color="text.primary" gutterBottom>
                  <CheckOutlinedIcon sx={{ mr: 1 }} />
                  Result
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <ResultCard
                  zipCode={searchResult}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: 'whitesmoke',
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        )}

        {lastSearchesResult && (
          <Container sx={{ py: 8 }} maxWidth="md">
            <Divider variant="fullWidth" />
            <Grid container spacing={4} pt={2}>
              <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
                <Typography component="h4" variant="h5" color="text.primary" gutterBottom>
                  <FormatListBulletedOutlinedIcon sx={{ mr: 1 }} />
                  Search history
                </Typography>
                <Button
                  type="button"
                  size="small"
                  variant="outlined"
                  color="error"
                  onClick={() => setConfirmationDialog(true)}
                  disabled={!lastSearchesResult.getLastSearches.length || loading}
                >
                  <DeleteOutlineOutlinedIcon sx={{ mr: 1 }} />
                  Clear all
                </Button>
              </Grid>
              {lastSearchesResult.getLastSearches.length ? (
                lastSearchesResult.getLastSearches.map((zipCode) => (
                  <Grid key={zipCode.id} item xs={12}>
                    <ResultCard
                      zipCode={zipCode}
                      variant="outlined"
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    />
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography variant="h6" align="center" color="text.secondary" component="p">
                    no records
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Container>
        )}
      </Container>
      <Footer />
      <Dialog
        open={confirmationDialog}
        onClose={() => setConfirmationDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you wanna clear ALL your search data?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={clearSearchHistory} autoFocus>
            Ok
          </Button>
          <Button onClick={() => setConfirmationDialog(false)} autoFocus color="error">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </ThemeProvider>
  );
};

export default App;
