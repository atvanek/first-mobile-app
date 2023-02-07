import { StatusBar } from "expo-status-bar";
import {
	StyleSheet,
	Text,
	TextInput,
	Image,
	View,
	Button,
	ScrollView,
	SafeAreaView,
} from "react-native";

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Image
				source={{
					uri: "https://assets.stickpng.com/images/5a4e432a2da5ad73df7efe7a.png",
				}}
				style={styles.loginLogo}></Image>
			<TextInput style={styles.input} name='username' placeholder='username' />
			<TextInput style={styles.input} placeholder='password' />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},

	input: {
		width: 90 + "%",
		padding: 10,
		margin: 2,
		backgroundColor: "#FAFAFA",
	},

	loginLogo: {
		height: 70,
		width: 50 + "%",
	},
});
