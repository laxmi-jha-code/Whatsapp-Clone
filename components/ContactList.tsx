import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import React from 'react'


export default function ContactList() {
    const contacts= [
        {
            uid: '1',
            name: 'Laxmi Jha',
            status: 'A learner who is seeking knowledge',
            
            
        },
        {
            uid: '2',
            name: 'Binit Jha',
            status: 'A passionate developer and a tech enthusiast',
            
            
        },
    ];

    
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={true}
      >
        {contacts.map(({uid, name, status,  }) => (
            <View key={uid} style={styles.userCard}>
                
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
        
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
      fontSize: 24,
      fontWeight: 'bold',
      paddingHorizontal: 10,
    },
    container:{
      paddingHorizontal: 16,
      marginBottom: 4,

    },
    userCard:{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 14,
      backgroundColor: 'purple',
      padding: 8,
      borderRadius: 14

    },
    
    userName: {
      fontSize: 16,
      fontWeight: 600,
      color: 'white',
    },
    userStatus: {
      fontSize: 12,
      color: 'white',
      
    },
})