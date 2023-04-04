import React from 'react';
import { Document, Page, Text, View, StyleSheet} from '@react-pdf/renderer';
import { ISelectionDetails } from './SelectionDetails';


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

interface IWatchlistPdfProps {
  watchlistList: ISelectionDetails[],
}


const WatchlistPdfDocument = (props: IWatchlistPdfProps) => {
 
  const {watchlistList} = props;


  return (
    <Document>
      <Page size="A4" >
        <View>
        <Text style={styles.title}>My watchlist</Text>
        <View style={styles.listContainer}>
          {watchlistList.map((listItem, index) => {
            return <View key={index} style={styles.list}>
              <Text>{`${index+1}) `}</Text>
              <Text style={styles.listItem}>{listItem.Title}</Text>
              <Text>{`(${listItem.Year})`}</Text>
            </View>
          })}
        </View>
        </View>
      </Page>
    </Document>
  )
}


export default WatchlistPdfDocument;