import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width -40;
const servicesHome = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop:10,
  },
  body: {
    padding: 15,
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
    fontWeight:'bold',
  },
  headerContainer: {
    borderColor: '#88EECC',
    borderTopLeftRadius: 10, // Rounded top-left corner
    borderTopRightRadius: 10, // Rounded top-right corner
    overflow: 'hidden', // Clip the content inside the rounded border
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#44AA92',
  },
  cardRow: {
    color:'black'
  },
  card:{
    backgroundColor:'#F9F9F9',
    marginLeft:0,
    width: width ,
    borderRadius:15,
    borderWidth:1,
    borderColor: '#91E0CE' 
  }

})  

export default servicesHome;