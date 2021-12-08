import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
    body: {
        paddingTop: 65,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    section: {

    }
});

// Create Document Component
const PdfCustom = ({dato}) => {
    const monthNames = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO",
    "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"
    ];

    console.log(dato, 'entro');
    const date = new Date()
    return <Document>
        <Page size="LETTER" style={styles.body}>
            <View>
                <Text style={{ fontSize: '12px', textAlign: 'right', margin: 12 }}>
                    MÉRIDA, YUCATAN A DÍA {date.getDate()} DE MES {monthNames[date.getMonth()]} DEL AÑO {date.getFullYear()}</Text>
                <Text style={{ fontSize: '12px', textAlign: 'left', marginTop: 50, marginHorizontal:12, marginBottom: 50}}>A QUIEN CORRESPONDA:</Text>
                <Text style={{ fontSize: '12px', textAlign: 'justify', margin: 12, }}>
                    Por medio de la presente, extiendo mi recomendación personal a {dato.nombre +" "+ dato.apellido}, ha mostrado ser una persona íntegra, responsable y trabajadora.
                    Por todo lo anterior, le considero una gran persona digna de confianza y con la aptitud y capacidad para afrontar cualquier responsabilidad que se deje a su cargo. Asimismo, puedo asegurar que es una persona con una ética intachable.
                    Sin más por el momento, reitero mi más sincera recomendación para los fines que considere pertinentes.
                </Text>

                <Text style={{ fontSize: '12px', textAlign: 'center', marginHorizontal:12, marginBottom: 25  }}>
                    FIRMA
                </Text>
                <Text style={{ fontSize: '12px', textAlign: 'center', marginBottom:5 }}>
                    ________________________
                </Text>
                <Text style={{ fontSize: '12px', textAlign: 'center' }}>
                    Bryan Isaac Mendez Pech UTM
                </Text>
            </View>
        </Page>
    </Document>
}

export default PdfCustom;