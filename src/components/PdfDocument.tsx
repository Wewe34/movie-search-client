import React, { useEffect, useState } from 'react';
import { Document, Page, Text, View, StyleSheet, PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { ISelectionDetails } from './SelectionDetails';
import { isAbsolute } from 'path';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
  },
  title: {
    position: 'absolute',
    left: '40%',
    top: 20,
    padding: 10,
  },
  list: {
    display:'flex',
    flexDirection: 'row',
    margin: '5px 10px',
  },
  listContainer: {
    position: 'absolute',
    left: 20,
    top: 50
  },
  listItem: {
    paddingRight: 5
  }
});

interface IPdfProps {
  favoritesList?: ISelectionDetails[],
  favorites: string;
}


const PdfDocument = (props: IPdfProps) => {
  const [currentList, setCurrentList] =useState<string>();
  const {favoritesList, favorites} = props;
  
  useEffect(() => {
    if(favorites.length) {

    }
  },[])

  return (
    <Document>
      <Page size="A4" >
        <View>
        <Text style={styles.title}>My Favorites</Text>
        <View style={styles.listContainer}>
          {favoritesList ? favoritesList.map((favorite, index) => {
            return <View key={index} style={styles.list}>
              <Text>{`${index+1}) `}</Text>
              <Text style={styles.listItem}>{favorite.Title}</Text>
              <Text>{`(${favorite.Year})`}</Text>
            </View>
          }) : ''}
        </View>
        </View>
      </Page>
    </Document>
  )
}


export default PdfDocument;