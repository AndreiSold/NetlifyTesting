import { Box, Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import MPCard from "../cards/card/MPCard";
import { useStyles } from "./ValuesSection.styles";

const ValuesSection: React.FC<{ obj: any }> = ({ obj }) => {
  const classes = useStyles();
  const cards = [
    <MPCard
      key={1}
      title={obj.data.title}
      divider
      dividerExtraClasses={classes.firstDivider}
      paragraphClasses={classes.cardParagraph}
      paragraphs={[obj.data.description]}
      image={{
        url: obj.data.image,
        title: obj.data.title,
        subtitle: obj.data.description,
      }}
    />,
    <MPCard
      key={2}
      title="Unkompliziert"
      divider
      dividerExtraClasses={classes.divider}
      paragraphClasses={classes.cardParagraph}
      paragraphs={[
        "In der Flut digitaler Informationen bahnen wir Ihnen über einen standardisierten Zugang den Weg zu funktionierenden Services. Und auch die Integration gestalten wir für Sie so effizient wie möglich. Sollten doch einmal Probleme auftreten, stehen wir Ihnen mit unserer Expertise gerne zur Verfügung. Das macht Komplexes unerwartet einfach.",
      ]}
    />,
    <MPCard
      key={3}
      title="Transparent"
      divider
      dividerExtraClasses={classes.divider}
      paragraphClasses={classes.cardParagraph}
      paragraphs={[
        "Transparenz schreiben wir groß. Kostenprognosen, API-Aufrufe und Reports – über unser Dashboard haben Sie jederzeit alles im Blick. Sie kontrollieren selbst Ihre abgerufenen Services und behalten so mit Leichtigkeit die Fäden in der Hand, anstatt sich bei jedem Provider einzeln informieren zu müssen. So geht Controlling in Echtzeit!",
      ]}
    />,
    <MPCard
      key={4}
      title="Verlässlich"
      divider
      dividerExtraClasses={classes.divider}
      paragraphClasses={classes.cardParagraph}
      paragraphs={[
        "Die msg ist Ihr Vertragspartner für alle digitalen Services. Wir stehen damit für die Sicherheit und Nachhaltigkeit Ihrer digitalen Projekte. So werden Sie zum Treiber von Innovation, ohne in eigene Entwicklung investieren zu müssen.",
      ]}
    />,
  ];

  return (
    <Container disableGutters>
      <Box mt={17.5} mb={17.5}>
        <Grid container>
          <Grid item xs={6}>
            <Box pr={7}>
              <Typography
                variant="h2"
                className={classes.sectionTitle}
                data-cy="values-section-title"
              >
                Meet.
              </Typography>
              <Typography variant="h2" className={classes.sectionTitle}>
                Mix.
              </Typography>
              <Typography variant="h2" className={classes.sectionTitle}>
                Match.
              </Typography>
              <Typography
                variant="h5"
                align="left"
                className={classes.sectionSubtitle}
              >
                <strong>Selbstverständnis</strong>
              </Typography>
              <Typography variant="h5" align="left">
                Wir vernetzen Nutzer mit Entwicklern, API-Consumer mit
                API-Providern; wir bündeln Kompetenzen und ermöglichen neue
                Geschäftsmodelle. Auf unserem digitalen Marktplatz entstehen
                Ideen und Innovationen, die morgen den Unterschied machen. Für
                Sie als Versicherer wird die Nutzung API-basierter Services so
                unkompliziert und sicher wie nie. Kurz: msg.DigitalServices ist
                Ihre Schnittstelle zur Zukunft.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box pl={7}>{cards.map((card) => card)}</Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ValuesSection;
