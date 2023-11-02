import { View, Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import React, {useState}from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomInput = ({ value, setValue, label, isPassword }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setValue}
          value={value}
          secureTextEntry={!showPassword && isPassword} // Conditionally apply secureTextEntry
        />
        {isPassword && (
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
            <Icon name={showPassword ? 'eye' : 'eye-slash'} size={24} color="#AEAEAE" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 16,
    paddingLeft: 8,
    width: '80%',
    marginLeft:37,
  },
  input: {
    flex: 1,
    height: 40,
   
  },
  label: {
    color: '#AEAEAE',
    fontSize: 16,
    marginBottom: 8,
    paddingLeft: 35,
  },
  eyeIcon: {
    padding: 10,
  },
});

export default CustomInput;