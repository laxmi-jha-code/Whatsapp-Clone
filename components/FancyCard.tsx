import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function () {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri:'https://www.expedia.com/stories/wp-content/uploads/2021/09/Arequipa.png'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
        <Text style={styles.cardTitle}>Peru</Text>
        <Text style={styles.cardLabel}>Western Coast of South America</Text>
        <Text style={styles.cardDescription}>While Peru might be synonymous with Machu Picchu for some, one glimpse of the less-famous but equally impressive archaeological sites in Trujillo, colonial architecture of Lima and White City of Arequipa will have you researching airfare within seconds.</Text>
        <Text style={styles.cardFooter}>12 mins away</Text>
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    card:{
        width: 350,
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 25
    },
    cardElevated:{
        backgroundColor:'white',
        color: 'black',
        elevation: 4,
        shadowOffset:{
            width: 100,
            height: 100
        }
    },
    cardImage:{
        height:180,
        marginBottom:8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody:{
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },
    cardTitle:{
        color:'red',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6.

    },
    cardLabel:{
        color:'green',
        fontSize: 15,
        marginBottom: 6,
        
    },
    cardDescription:{
        color:'black',
        fontSize: 14,
        marginBottom: 6,
        marginTop: 4,
        flexShrink:1
    },
    cardFooter:{
        color: 'blue',
        marginBottom: 6,
        marginTop: 6,

    }
})