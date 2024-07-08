import {Box, Button, CircularProgress, Container, Grid} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid
                container
                style={{height: window.innerHeight - 100}}
                alignItems={"center"}
                justifyContent={"center"}
            >
                <Grid style={{width: 400}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <Box sx={{display: 'flex'}}>
                        <CircularProgress/>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;
