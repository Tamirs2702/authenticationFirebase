/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { AppleButton } from '@invertase/react-native-apple-authentication';

AppRegistry.registerComponent(appName, () => App);
import React from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Button,
    TouchableOpacity,
    ToastAndroid,
} from 'react-native';

export default class signUp extends React.Component {
    state = {email: '', password: '', errorMessage: null};
    signupNow = () => {
        //to do => firebase authentication with email & password code goes here
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: 'blue', fontSize: 40}}>Sign Up Now</Text>
                <TextInput
                    placeholder="Email"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    placeholder="Password"
                    autoCapitalize="none"
                    style={styles.textInput}
                    onChangeText={password => {
                        this.setState({password});
                    }}
                    value={this.state.password}
                />
                {this.state.errorMessage && (
                    <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
                )}
                <View style={{marginVertical: 20}}>
                    <Button
                        title="Sign Up"
                        color="blue"
                        onPress={() => this.signupNow()}
                    />
                </View>

                <View>
                    <Text>
                        Already have an account?
                        <Text
                            onPress={() => this.props.navigation.navigate('Login')}
                            style={{color: 'blue', fontSize: 18}}>
                            Login
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    textInput: {
        height: 40,
        fontSize: 20,
        width: '90%',
        borderColor: '#9b9b9b',
        borderBottomWidth: 1,
        marginTop: 8,
        marginVertical: 15,
    },
});

export default class Login extends React.Component {
    state = {email: '', password: '', errorMessage: null};
    handleLogin = () => {
        // TODO: Firebase auth code here...
        console.log('handleLogin')
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={{color: 'blue', fontSize: 40}}>Login</Text>

                <TextInput
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput
                    secureTextEntry
                    style={styles.textInput}
                    autoCapitalize="none"
                    placeholder="Password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                {this.state.errorMessage && (
                    <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
                )}
                <View style={{marginVertical: 20}}>
                    <Button title="Login" color="blue" onPress={this.handleLogin} />
                </View>
                <View>
                    <Text>
                        {' '}
                        Don't have an account?
                        <Text
                            onPress={() => this.props.navigation.navigate('SignUp')}
                            style={{color: 'blue', fontSize: 16}}>
                            {' '}
                            Sign Up{' '}
                        </Text>
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    textInput: {
        height: 40,
        fontSize: 20,
        width: '90%',
        borderColor: '#9b9b9b',
        borderBottomWidth: 1,
        marginTop: 8,
        marginVertical: 15,
    },
});


export default class Home extends React.Component {
    state = {currentUser: null};
    render() {
        const {currentUser} = this.state;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 25}}>Hi </Text>
                <Text style={{color: 'blue', fontSize: 25}}>
                    {currentUser && currentUser.email}
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
