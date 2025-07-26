import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from "react-native";
import FlatCard from "./components/FlatCard";
import ElevatedCard from "./components/ElevatedCard";
import FancyCard from "./components/FancyCard";
import ActionCard from "./components/ActionCard";
import ContactList from "./components/ContactList";
function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCard/> 
        <ElevatedCard/>
        <FancyCard/>
        <ContactList/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )

}
export default App;