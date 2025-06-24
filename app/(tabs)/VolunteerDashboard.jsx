import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Modal,
  Alert,
} from 'react-native';
import { Ionicons, FontAwesome, Entypo, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';

export default function RunninghourHomePage() {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      Alert.alert('Logged Out', 'You have been successfully logged out.');
      setModalVisible(false);
      // Optionally navigate to Login page
      navigation.replace('Login');
    } catch (error) {
      Alert.alert('Error', 'Failed to log out.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="person-circle" size={30} color="#fff" />
        </TouchableOpacity>
        <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
        <Ionicons name="notifications-outline" size={30} color="#fff" />
      </View>

      {/* Tagline */}
      <Text style={styles.tagline}>Run To Bond, Run So Others Can</Text>

      {/* Cards Section */}
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('ShowLocations')}
        >
          <Image
            source={require('../../assets/images/running_locations.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Running Locations</Text>
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity
            style={styles.smallCard}
            onPress={() => navigation.navigate('ShowUpcomingSessions')}
          >
            <Image
              source={require('../../assets/images/upcoming_activities.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Upcoming Activities</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.smallCard}
            onPress={() => navigation.navigate('UpcomingAnnouncements')}
          >
            <Image
              source={require('../../assets/images/weekly_activities.jpg')}
              style={styles.cardImage}
            />
            <Text style={styles.cardText}>Weekly Activities</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('BookActivities')}
        >
          <Image
            source={require('../../assets/images/book_activities.jpg')}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Book Runninghour's Activities</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>Run For Inclusion</Text>
      <View style={styles.socialIcons}>
        <FontAwesome name="linkedin-square" size={24} color="black" />
        <FontAwesome name="facebook-square" size={24} color="black" />
        <Entypo name="instagram" size={24} color="black" />
        <Feather name="x" size={24} color="black" />
        <FontAwesome name="youtube-play" size={24} color="black" />
      </View>

      <View style={styles.footerLinks}>
        <Text style={styles.footerLink}>Contact Us</Text>
        <Text style={styles.footerLink}>|</Text>
        <Text style={styles.footerLink}>Privacy Notice</Text>
      </View>

      {/* Logout Modal */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Profile</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
              <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D7FF00',
    flex: 1,
    paddingTop: 40,
  },
  header: {
    backgroundColor: '#4B217F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 80,
  },
  logo: {
    width: 120,
    height: 50,
    resizeMode: 'contain',
  },
  tagline: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 12,
    color: '#000',
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
  card: {
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
  },
  smallCard: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
    margin: 5,
  },
  row: {
    flexDirection: 'row',
  },
  cardImage: {
    width: '100%',
    height: 140,
  },
  cardText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 5,
    borderRadius: 5,
  },
  footerText: {
    textAlign: 'center',
    fontWeight: '600',
    marginVertical: 15,
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 10,
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  footerLink: {
    marginHorizontal: 5,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: '#19235E',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  logoutText: {
    color: '#fff',
    fontWeight: '600',
  },
  cancelButton: {
    padding: 10,
  },
  cancelText: {
    color: '#19235E',
    fontWeight: '600',
  },
});
