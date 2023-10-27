import { Box, Button, Card, Container, Typography } from '@mui/material';

export default function Home() {
  return (
    <main className="">
      <Container>
        <Button color="secondary" variant="contained">
          hi
        </Button>
        <Box>
          <Card>
            <Typography variant="h2" component={'h1'}>
              Hello World ~
            </Typography>
          </Card>
        </Box>
      </Container>
    </main>
  );
}
