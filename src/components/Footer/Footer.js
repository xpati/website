import React from "react";
import {
  Container,
  Typography,
  makeStyles,
  Divider,
  useTheme,
  Box,
  useMediaQuery,
} from "@material-ui/core";
import Social from "../Social";
import { LinkedIn, Instagram, GitHub, Email } from "@material-ui/icons";
import IconBtn from "../IconBtn";

const Footer = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Container>
      <Divider style={{ backgroundColor: theme.palette.primary.main }} />
      <Box className={classes.footer}>
        {isMobile && <Social mobile />}
        <Typography variant="body2" color="initial">
          © 2022 Sara Tranquada
          {!isMobile && (
            <>
              <IconBtn
                target="_blank"
                icon={GitHub}
                m={1}
                href="https://github.com/xpati"
              />

              <IconBtn
                target="_blank"
                icon={Instagram}
                m={1}
                href="https://www.instagram.com/xpati89/"
              />

              <IconBtn
                target="_blank"
                icon={LinkedIn}
                m={1}
                href="https://www.linkedin.com/in/sara-tranquada-a51695100/"
              />

              <IconBtn
                target="_blank"
                icon={Email}
                m={1}
                href="mailto:sara.tranquada@gmail.com"
              />
            </>
          )}
        </Typography>
      </Box>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  },
}));

export default Footer;
