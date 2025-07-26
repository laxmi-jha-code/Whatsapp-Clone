import { TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View,Linking, Image} from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)

    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingConatiner}>
            <Text style={styles.headerText}>
                What's new in Javascript 21- ES12
            </Text>
        </View>
        <Image
        source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-GyDNnD1MUqqKNulvTFQmRdS4Kj-VtsT-A&s'
        }}
        style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                JavaScript, formally known as ECMAScript, receives annual updates that introduce new features and enhancements. The latest official release is ECMAScript 2024 (ES2024), which was finalized in June 2024.
Some of the notable features introduced in recent ECMAScript versions and proposals include:
Temporal API (Proposal):
Aims to provide a modern and robust API for handling dates and times, addressing the shortcomings of the existing Date object.
Records and Tuples (Proposal):
Introduces deeply immutable data structures for more predictable state management, preventing unintended modifications.
Pattern Matching (Proposal):
Offers a more expressive and readable way to handle conditional logic and destructure complex data structures.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity
                onPress={() => openWebsite('https://www.w3schools.com/js/js_2024.asp')}
                >
                    <Text> Read More</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
    card:{
        width: 350,
        height: 340,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16,
    },
    elevatedCard:{
        elevation: 8,
        backgroundColor: 'orange',
        shadowOffset:{
            width: 1,
            height: 1
        },
        shadowColor: 'black',
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    headingConatiner:{
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        color: 'black',
        fontSize: 16,
        fontWeight: 600,
        
    },
    cardImage:{
        height: 100
    },
    bodyContainer:{
        padding: 10
    },
    footerContainer:{
        padding: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})