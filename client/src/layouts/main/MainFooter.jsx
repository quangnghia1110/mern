import { Link as ScrollLink } from 'react-scroll';
// material
import { experimentalStyled as styled } from '@material-ui/core/styles';
import { Grid, Divider, Container, Typography } from '@material-ui/core';
// components
import Logo from '../../components/Logo';
import useLocales from '../../hooks/useLocales';

const RootStyle = styled('div')(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.palette.background.default,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '130px',
  padding: theme.spacing(2, 0)
}));

export default function MainFooter() {
  const t = useLocales();

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" textAlign="center">
          <Grid item xs={12}>
            <ScrollLink to="move_top" spy smooth>
              <Logo sx={{ mx: 'auto' }} />
            </ScrollLink>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" sx={{ mt: 1, mb: 2 }}>
              Success or failure in business depends more on attitude in thinking than in ability to think.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="body2">&copy; 2024 3TNL Mobile. All rights reserved</Typography>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
