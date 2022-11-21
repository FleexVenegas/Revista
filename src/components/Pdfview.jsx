import React from "react";
import {
  Document,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import portadaA from "../data/portadA1.png";
import Banner from "../data/banner.png";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Oswald",
  },
  author: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: "Oswald",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  imagePortada: {
    maxWidth: "100%",
    maxHeight: "400",
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: "center",
    color: "grey",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  datas: {
    fontSize: 10,
    padding: 3,
    marginLeft: 5,
    marginTop: 3,
  },
});

const Pdfview = () => {
  const lorem = "lorem ipsu sd sd sdasddfd adfaf ";
  return (
    <>
      <Document>
        <Page size="A4">
          <View>
            <Text style={styles.datas}>ISSN: En tramite</Text>
            <View style={{ padding: 5 }}>
              <Image src={Banner} style={styles.imagePortada} />
            </View>
            <View style={{ display: "flex" }}>
              <Text style={styles.datas}>Abril Junio 2019</Text>
              <Text style={styles.datas}>Año 5, Número 5</Text>
            </View>
          </View>

          <View style={styles.div}>
            <Image src={portadaA} style={styles.imagePortada} />
          </View>
        </Page>
      </Document>
    </>
  );
};

export default Pdfview;
